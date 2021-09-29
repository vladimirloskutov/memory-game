import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import rootReducer from "./reducers";

const initialState = {
  gameStatus: 'initial',
  gameTimer: 0,
  gameTimerId: null,
  gameResults: [],
  shuffledIcons: shuffledIcons.sort(() => Math.random() - 0.5),
  remainingCards: shuffledIcons.length,
  comparisonIcons: [],
};

const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
);