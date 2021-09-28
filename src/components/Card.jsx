import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const { shuffledIcons, remainingCards, comparisonIcons } = state;
  return { shuffledIcons, remainingCards, comparisonIcons };
};

class Card extends React.Component {
  handleCardClick = (e) => {
    const cardId = e.target.id;
    const { dispatch, shuffledIcons, comparisonIcons, } = this.props;

    comparisonIcons.push(cardId);
    if (comparisonIcons.length < 3) {
        // shuffledIcons[cardId].status = 'opened';
        dispatch({ type: 'opened', payload: { cardId } });
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
                  <span className="invisible">{value}</span>
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
