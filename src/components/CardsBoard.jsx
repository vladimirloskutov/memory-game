import React from "react";
import Card from "./Card";

export default class CardsBoard extends React.Component {
  static defaultProps = {
    icons: [
      { value: '1', status: 'closed' }, { value: '2', status: 'closed' }, { value: '3', status: 'closed' }, { value: '4', status: 'closed' },
      { value: '5', status: 'closed' }, { value: '6', status: 'closed' }, { value: '7', status: 'closed' }, { value: '8', status: 'closed' },
      { value: '9', status: 'closed' }, { value: '1', status: 'closed' }, { value: '2', status: 'closed' }, { value: '3', status: 'closed' },
      { value: '4', status: 'closed' }, { value: '5', status: 'closed' }, { value: '6', status: 'closed' }, { value: '7', status: 'closed' },
      { value: '8', status: 'closed' }, { value: '9', status: 'closed' }, { value: '!', status: 'closed' }, { value: '@', status: 'closed' },
      { value: '#', status: 'closed' }, { value: '$', status: 'closed' }, { value: '%', status: 'closed' }, { value: '^', status: 'closed' },
      { value: '&', status: 'closed' }, { value: '*', status: 'closed' }, { value: '-', status: 'closed' }, { value: '!', status: 'closed' },
      { value: '@', status: 'closed' }, { value: '#', status: 'closed' }, { value: '$', status: 'closed' }, { value: '%', status: 'closed' },
      { value: '^', status: 'closed' }, { value: '&', status: 'closed' }, { value: '*', status: 'closed' }, { value: '-', status: 'closed' },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      shuffledIcons: props.icons.sort(() => Math.random() - 0.5),
      remainingCards: props.icons.length,
      comparisonIcons: [],
    };
  }

  handleCardClick = (cardId) => {
    const { shuffledIcons, comparisonIcons } = this.state;

    if (comparisonIcons.length > 1) {
      return;
    }

    shuffledIcons[cardId].status = 'opened';
    comparisonIcons.push(cardId);

    this.setState({ shuffledIcons, comparisonIcons });
  };

  renderCardsBoard(items) {
    return items.map((item, index) => <Card key={index} id={index} data={item} cardClickHandler={this.handleCardClick} />);
  }

  render() {
    const { shuffledIcons } = this.state;

    return (
      <div className="cards-board row ml-5">
        {this.renderCardsBoard(shuffledIcons)}
      </div>
    );
  }
}
