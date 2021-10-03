import getShuffledIcons from '../utils/helpers';
import {
  GAME_FINISHED,
  CARD_OPENED,
  CARD_CLOSED,
  CARD_DELETED,
} from '../utils/constants';

const initialShuffledIcons = getShuffledIcons();
const initialState = {
  shuffledIcons: initialShuffledIcons,
  remainingIcons: initialShuffledIcons.length,
  comparisonIcons: [],
};

const icons = (state = initialState, action) => {
  const shuffledIcons = [...state.shuffledIcons];

  switch (action.type) {
    case CARD_OPENED: {
      const { cardId } = action.payload;
      shuffledIcons[cardId].status = CARD_OPENED;

      return {
        ...state,
        shuffledIcons,
      };
    }
    case CARD_CLOSED: {
      const { comparisonIcons } = action.payload;
      comparisonIcons.forEach((cardId) => {
        shuffledIcons[cardId].status = CARD_CLOSED;
      });

      return {
        ...state,
        shuffledIcons,
        comparisonIcons: [],
      };
    }
    case CARD_DELETED: {
      const { comparisonIcons, newRemainingIcons } = action.payload;
      comparisonIcons.forEach((cardId) => {
        shuffledIcons[cardId].status = CARD_DELETED;
      });

      return {
        ...state,
        shuffledIcons,
        remainingIcons: newRemainingIcons,
        comparisonIcons: [],
      };
    }
    case GAME_FINISHED: {
      const newShuffledIcons = getShuffledIcons();

      return {
        shuffledIcons: newShuffledIcons,
        remainingIcons: newShuffledIcons.length,
        comparisonIcons: [],
      };
    }
    default: {
      return state;
    }
  }
};

export default icons;
