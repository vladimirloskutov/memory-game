const openCard = (cardId) => ({
  type: 'CARD_OPENED',
  payload: {
    cardId,
  },
});

const closeCard = (comparisonIcons) => ({
  type: 'CARD_CLOSED',
  payload: {
    comparisonIcons,
  },
});

const deleteCard = (comparisonIcons, newRemainingIcons) => ({
  type: 'CARD_DELETED',
  payload: {
    comparisonIcons,
    newRemainingIcons,
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
