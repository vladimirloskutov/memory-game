import React from 'react';
import { connect } from 'react-redux';
import {
  closeCard, deleteCard, finishGame, openCard,
} from '../actions';

const mapStateToProps = ({ game, icons }) => {
  const {
    gameStatus,
    gameTimerId,
  } = game;

  const {
    shuffledIcons,
    remainingCards,
    comparisonIcons,
  } = icons;

  return {
    gameStatus,
    gameTimerId,
    shuffledIcons,
    remainingCards,
    comparisonIcons,
  };
};

const Card = (props) => {
  const {
    dispatch,
    cardId,
    gameStatus,
    gameTimerId,
    shuffledIcons,
    remainingCards,
    comparisonIcons,
  } = props;

  const handleCardClick = (e) => {
    const currentCardId = e.target.id;

    if (gameStatus !== 'GAME_STARTED') {
      alert('Press the START button');
      return;
    }

    if (comparisonIcons.length < 2) {
      comparisonIcons.push(currentCardId);
      dispatch(openCard(currentCardId));
    }

    const closeCardTimerId = setTimeout(() => {
      if (comparisonIcons.length === 1) {
        dispatch(closeCard(comparisonIcons));
      }
    }, 5000);

    if (comparisonIcons.length === 2) {
      clearTimeout(closeCardTimerId);

      const [firstCardId, secondCardId] = comparisonIcons;
      const firstCardValue = shuffledIcons[firstCardId].value;
      const secondCardValue = shuffledIcons[secondCardId].value;

      setTimeout(() => {
        if (firstCardValue === secondCardValue) {
          const newRemainingCards = remainingCards - 2;

          dispatch(deleteCard(comparisonIcons, newRemainingCards));

          if (newRemainingCards === 0) {
            clearInterval(gameTimerId);
            dispatch(finishGame());
          }
        } else {
          dispatch(closeCard(comparisonIcons));
        }
      }, 2000);
    }
  };

  const { status, value } = shuffledIcons[cardId];
  let card;

  switch (status) {
    case 'CARD_CLOSED':
      card = (
        <div className="col-2 mb-4">
          <div className="card bg-warning">
            <div id={cardId} className="card-body" onClick={handleCardClick}>
              <span className="invisible">{value}</span>
            </div>
          </div>
        </div>
      );
      break;
    case 'CARD_OPENED':
      card = (
        <div className="col-2 mb-4">
          <div className="card">
            <div className="card-body text-center font-weight-bold">{value}</div>
          </div>
        </div>
      );
      break;
    case 'CARD_DELETED':
      card = (
        <div className="col-2" />
      );
      break;
    default:
      throw new Error(`Unknown card status: ${status}`);
  }

  return card;
};

export default connect(mapStateToProps)(Card);
