import React from "react";
import { connect } from "react-redux";
import {closeCard, deleteCard, finishGame, openCard} from "../actions";

const mapStateToProps = ({ game, icons }) => {
  const { gameTimerId } = game;
  const { shuffledIcons, remainingCards, comparisonIcons } = icons;
  return { gameTimerId, shuffledIcons, remainingCards, comparisonIcons };
};

class Card extends React.Component {
  handleCardClick = (e) => {
    const cardId = e.target.id;
    const { dispatch, gameTimerId, shuffledIcons, remainingCards, comparisonIcons } = this.props;

    if (comparisonIcons.length < 2) {
      comparisonIcons.push(cardId);
      dispatch(openCard(cardId));
    }

    if (comparisonIcons.length === 1) {
      Card.closeCardTimerId = setTimeout(() => {
        dispatch(closeCard(comparisonIcons));
      }, 1000);
    }

    if (comparisonIcons.length === 2) {
      clearTimeout(Card.closeCardTimerId);

      const [firstCardId, secondCardId] = comparisonIcons;
      const firstCardValue = shuffledIcons[firstCardId].value;
      const secondCardValue = shuffledIcons[secondCardId].value;

      Card.comparisonCardTimerId = setTimeout(() => {
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
      }, 1000);
    }
  };

  render() {
    const { id, shuffledIcons } = this.props;
    const { status, value } = shuffledIcons[id];
    let card;

    switch (status) {
      case 'CARD_CLOSED':
        card = (
            <div className="col-2 mb-4">
              <div className="card bg-warning">
                <div id={id} className="card-body" onClick={this.handleCardClick}>
                  <span className="">{value}</span>
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
  }
}

export default connect(mapStateToProps)(Card);
