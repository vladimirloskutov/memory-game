import {
  GAME_INITIAL,
  GAME_STARTED,
  GAME_FINISHED,
} from '../utils/constants';

const initialState = {
  gameStatus: 'GAME_INITIAL',
  gameTimer: 0,
  gameTimerId: null,
  gameResults: [],
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case GAME_STARTED: {
      return {
        ...state,
        gameStatus: GAME_STARTED,
        gameTimer: state.gameTimer + 1,
        gameTimerId: action.payload.gameTimerId,
      };
    }
    case GAME_FINISHED: {
      const gameResults = [...state.gameResults];
      gameResults.push(state.gameTimer);

      return {
        gameStatus: GAME_INITIAL,
        gameTimer: 0,
        gameTimerId: null,
        gameResults,
      };
    }
    default: {
      return state;
    }
  }
};

export default game;
