const initialState = {
  gameStatus: 'initial',
  gameTimer: 0,
  gameTimerId: null,
  gameResults: [],
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case 'started':
      return {
        ...state,
        gameStatus: 'started',
        gameTimer: state.gameTimer + 1,
        gameTimerId: action.payload.gameTimerId,
      };
    case 'finished':
      const gameResults = [...state.gameResults];
      gameResults.push(state.gameTimer);

      return {
        gameStatus: 'initial',
        gameTimer: 0,
        gameTimerId: null,
        gameResults,
      };
    default:
      return state;
  }
};

export default game;