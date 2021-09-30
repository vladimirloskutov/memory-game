import React from "react";
import { connect } from "react-redux";

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
      dispatch({ type: 'opened', payload: { cardId } });
    }

    if (comparisonIcons.length === 1) {
      Card.closeCardTimerId = setTimeout(() => {
        dispatch({ type: 'closed', payload: { comparisonIcons } });
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

          dispatch({ type: 'deleted', payload: { comparisonIcons, newRemainingCards } });

          if (newRemainingCards === 0) {
            clearInterval(gameTimerId);
            dispatch({ type: 'finished' });
          }

        } else {
          dispatch({ type: 'closed', payload: { comparisonIcons } });
        }
      }, 1000);
    }
  };

  render() {
    const { id, shuffledIcons } = this.props;
    const { status, value } = shuffledIcons[id];
    let card;

    switch (status) {
      case 'closed':
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
      case 'opened':
        card = (
            <div className="col-2 mb-4">
              <div className="card">
                <div className="card-body text-center font-weight-bold">{value}</div>
              </div>
            </div>
        );
        break;
      case 'deleted':
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
