const openCard = cardId => ({
  type: 'CARD_OPENED',
  payload: {
    cardId,
  },
});

const closeCard = comparisonIcons => ({
  type: 'CARD_CLOSED',
  payload: {
    comparisonIcons,
  },
});

const deleteCard = (comparisonIcons, newRemainingCards) => ({
  type: 'CARD_DELETED',
  payload: {
    comparisonIcons,
    newRemainingCards,
  },
});

const startGame = (gameTimerId) => ({
  type: 'GAME_STARTED',
  payload: {
    gameTimerId,
  },
});

const finishGame = () => ({
  type: 'GAME_FINISHED',
});

export {
  openCard,
  closeCard,
  deleteCard,
  startGame,
  finishGame,
};