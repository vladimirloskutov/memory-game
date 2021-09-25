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

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { shuffledIcons, remainingCards, comparisonIcons } = this.state;

    if (comparisonIcons.length === 1) {
      this.timerID = setTimeout(() => {
        const [cardId] = comparisonIcons;
        shuffledIcons[cardId].status = 'closed';
        this.setState({ shuffledIcons, comparisonIcons: [] });
      }, 1000);
    }

    if (this.state.comparisonIcons.length === 2) {
      clearTimeout(this.timerID);

      const [firstCardId, secondCardId] = comparisonIcons;
      const firstCardValue = shuffledIcons[firstCardId].value;
      const secondCardValue = shuffledIcons[secondCardId].value;

      this.timerID1 = setTimeout(() => {
        if (firstCardValue === secondCardValue) {
          shuffledIcons[firstCardId].status = 'deleted';
          shuffledIcons[secondCardId].status = 'deleted';
          const newRemainingCards = remainingCards - 2;

          this.setState({ remainingCards: newRemainingCards });
        } else {
          shuffledIcons[firstCardId].status = 'closed';
          shuffledIcons[secondCardId].status = 'closed';
        }

        this.setState({ shuffledIcons, comparisonIcons: [] });
      }, 1000);
    }
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
