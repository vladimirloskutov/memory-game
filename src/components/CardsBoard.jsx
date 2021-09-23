import React from "react";
import Card from "./Card";

export default class CardsBoard extends React.Component {
  renderCardsBoard(items) {
    return items.map((item, index) => <Card value={item} key={index}/>);
  }

  render() {
    const shuffledIcons = this.props.icons.sort(() => Math.random() - 0.5);

    return (
      <div className="cards-board row ml-5">
        {this.renderCardsBoard(shuffledIcons)}
      </div>
    );
  }
}
