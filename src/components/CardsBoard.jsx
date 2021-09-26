import React from "react";
import Card from "./Card";

export default class CardsBoard extends React.Component {
  handleCardClick = (cardId) => {
    const { cardClickHandler } = this.props;
    cardClickHandler(cardId);
  };

  renderCardsBoard(items) {
    return items.map((item, index) => <Card key={index} id={index} data={item} cardClickHandler={this.handleCardClick} />);
  }

  render() {
    const { shuffledIcons } = this.props;

    return (
      <div className="cards-board row ml-5">
        {this.renderCardsBoard(shuffledIcons)}
      </div>
    );
  }
}
