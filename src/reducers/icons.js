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
    case 'opened':
      const cardId = action.payload.cardId;
      shuffledIcons[cardId].status = 'opened';

      return {
        ...state,
        shuffledIcons,
      };
    case 'closed':
      action.payload.comparisonIcons.forEach((cardId) => {
        shuffledIcons[cardId].status = 'closed';
      });

      return {
        ...state,
        shuffledIcons,
        comparisonIcons: [],
      };
    case 'deleted':
      action.payload.comparisonIcons.forEach((cardId) => {
        shuffledIcons[cardId].status = 'deleted';
      });

      return {
        ...state,
        shuffledIcons,
        remainingCards: action.payload.newRemainingCards,
        comparisonIcons: [],
      };
    case 'finished':
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