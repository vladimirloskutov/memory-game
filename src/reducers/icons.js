import getShuffledIcons from "../utils/helpers";

const initialShuffledIcons = getShuffledIcons();
const initialState = {
  shuffledIcons: initialShuffledIcons,
  remainingCards: initialShuffledIcons.length,
  comparisonIcons: [],
};

const icons = (state = initialState, action) => {
  const shuffledIcons = [...state.shuffledIcons];

  switch (action.type) {
    case 'CARD_OPENED':
      const cardId = action.payload.cardId;
      shuffledIcons[cardId].status = 'CARD_OPENED';

      return {
        ...state,
        shuffledIcons,
      };
    case 'CARD_CLOSED':
      action.payload.comparisonIcons.forEach((cardId) => {
        shuffledIcons[cardId].status = 'CARD_CLOSED';
      });

      return {
        ...state,
        shuffledIcons,
        comparisonIcons: [],
      };
    case 'CARD_DELETED':
      action.payload.comparisonIcons.forEach((cardId) => {
        shuffledIcons[cardId].status = 'CARD_DELETED';
      });

      return {
        ...state,
        shuffledIcons,
        remainingCards: action.payload.newRemainingCards,
        comparisonIcons: [],
      };
    case 'GAME_FINISHED':
      const newShuffledIcons = getShuffledIcons();

      return {
        shuffledIcons: newShuffledIcons,
        remainingCards: newShuffledIcons.length,
        comparisonIcons: [],
      };
    default:
      return state;
  }
};

export default icons;