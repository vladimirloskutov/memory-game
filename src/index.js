import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import {act} from "@testing-library/react";

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
  gameStatus: null,
  gameTimer: 0,
  gameResults: [],
  shuffledIcons: shuffledIcons.sort(() => Math.random() - 0.5),
  remainingCards: shuffledIcons.length,
  comparisonIcons: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'started':
      return { ...state, gameStatus: 'started', gameTimer: state.gameTimer + 1 };
    case 'opened':
      const { cardId } = action.payload;
      const { shuffledIcons } = state;
      shuffledIcons[cardId].status = 'opened';
      return { ...state, shuffledIcons };
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