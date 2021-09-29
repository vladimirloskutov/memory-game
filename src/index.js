import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";

const ICONS = [
  {value: '1', status: 'closed'}, {value: '2', status: 'closed'}, {value: '3', status: 'closed'}, { value: '4', status: 'closed' },
  {value: '5', status: 'closed'}, {value: '6', status: 'closed'}, {value: '7', status: 'closed'}, { value: '8', status: 'closed' },
  {value: '9', status: 'closed'}, {value: '1', status: 'closed'}, {value: '2', status: 'closed'}, { value: '3', status: 'closed' },
  {value: '4', status: 'closed'}, {value: '5', status: 'closed'}, {value: '6', status: 'closed'}, { value: '7', status: 'closed' },
  {value: '8', status: 'closed'}, {value: '9', status: 'closed'}, {value: '!', status: 'closed'}, { value: '@', status: 'closed' },
  {value: '#', status: 'closed'}, {value: '$', status: 'closed'}, {value: '%', status: 'closed'}, { value: '^', status: 'closed' },
  {value: '&', status: 'closed'}, {value: '*', status: 'closed'}, {value: '-', status: 'closed'}, { value: '!', status: 'closed' },
  {value: '@', status: 'closed'}, {value: '#', status: 'closed'}, {value: '$', status: 'closed'}, { value: '%', status: 'closed' },
  {value: '^', status: 'closed'}, {value: '&', status: 'closed'}, {value: '*', status: 'closed'}, { value: '-', status: 'closed' },
];

const shuffledIcons = JSON.parse(JSON.stringify(ICONS));

const initialState = {
  gameStatus: 'initial',
  gameTimer: 0,
  gameTimerId: null,
  gameResults: [],
  shuffledIcons: shuffledIcons.sort(() => Math.random() - 0.5),
  remainingCards: shuffledIcons.length,
  comparisonIcons: [],
};

const reducer = (state, action) => {
  const shuffledIcons = [...state.shuffledIcons];

  switch (action.type) {
    case 'started':
      return { ...state, gameStatus: 'started', gameTimer: state.gameTimer + 1, gameTimerId: action.payload.gameTimerId };
    case 'finished':
      const newShuffledIcons = JSON.parse(JSON.stringify(ICONS)).sort(() => Math.random() - 0.5);
      const gameResults = [...state.gameResults];
      gameResults.push(state.gameTimer);
      return {
        gameStatus: 'initial',
        gameTimer: 0,
        gameTimerId: null,
        gameResults,
        shuffledIcons: newShuffledIcons,
        remainingCards: ICONS.length,
        comparisonIcons: [],
      };
    case 'opened':
      shuffledIcons[action.payload.cardId].status = 'opened';
      return { ...state, shuffledIcons };
    case 'closed':
      action.payload.comparisonIcons.forEach((cardId) => {
        shuffledIcons[cardId].status = 'closed';
      });
      return { ...state, shuffledIcons, comparisonIcons: [] };
    case 'deleted':
      action.payload.comparisonIcons.forEach((cardId) => {
        shuffledIcons[cardId].status = 'deleted';
      });
      return { ...state, shuffledIcons, remainingCards: action.payload.newRemainingCards, comparisonIcons: [] };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
);