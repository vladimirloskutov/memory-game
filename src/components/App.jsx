import React from "react";
import ControlPanel from "./ControlPanel";
import CardsBoard from "./CardsBoard";

export default class App extends React.Component {
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

    const shuffledIcons = JSON.parse(JSON.stringify(props));

    this.state = {
      gameStatus: null,
      gameTimer: 0,
      gameResults: [],
      shuffledIcons: shuffledIcons.icons.sort(() => Math.random() - 0.5),
      remainingCards: shuffledIcons.icons.length,
      comparisonIcons: [],
    };
  }

  handleStartButtonClick = () => {
    const { gameStatus } = this.state;

    switch (gameStatus) {
      case null:
        this.gameStartTimerID = setInterval(() => {
          this.setState({ gameStatus: 'started', gameTimer: this.state.gameTimer + 1 });
        }, 1000);
        break;
      case 'started':
        return;
      default:
        throw new Error(`Unknown game status: ${gameStatus}`);
    }
  };

  handleCardClick = (cardId) => {
    const { shuffledIcons, remainingCards, comparisonIcons, gameResults, gameTimer } = this.state;

    comparisonIcons.push(cardId);
    if (comparisonIcons.length < 3) {
      shuffledIcons[cardId].status = 'opened';
    }

    if (comparisonIcons.length === 1) {
      this.openCardTimerID = setTimeout(() => {
        const [cardId] = comparisonIcons;
        shuffledIcons[cardId].status = 'closed';
        this.setState({ shuffledIcons, comparisonIcons: [] });
      }, 1000);
    }

    if (comparisonIcons.length === 2) {
      clearTimeout(this.openCardTimerID);

      const [firstCardId, secondCardId] = comparisonIcons;
      const firstCardValue = shuffledIcons[firstCardId].value;
      const secondCardValue = shuffledIcons[secondCardId].value;

      this.closeCardTimerID = setTimeout(() => {
        if (firstCardValue === secondCardValue) {
          shuffledIcons[firstCardId].status = 'deleted';
          shuffledIcons[secondCardId].status = 'deleted';
          const newRemainingCards = remainingCards - 2;

          if (newRemainingCards === 0) {
            clearInterval(this.gameStartTimerID);

            const shuffledIcons = JSON.parse(JSON.stringify(App.defaultProps));
            gameResults.push(gameTimer);

            this.setState({
              gameStatus: null,
              gameTimer: 0,
              gameResults: gameResults,
              shuffledIcons: shuffledIcons.icons.sort(() => Math.random() - 0.5),
              remainingCards: shuffledIcons.icons.length,
              comparisonIcons: [],
            });
            return;
          }

          this.setState({ shuffledIcons, comparisonIcons: [], remainingCards: newRemainingCards });
        } else {
          shuffledIcons[firstCardId].status = 'closed';
          shuffledIcons[secondCardId].status = 'closed';

          this.setState({ shuffledIcons, comparisonIcons: [] });
        }
      }, 1000);
    }

    this.setState({ shuffledIcons, comparisonIcons });
  };

  render() {
    const { gameTimer, shuffledIcons } = this.state;

    return (
        <div className="mt-5 ml-5">
          <ControlPanel gameTimer={gameTimer} startButtonClickHandler={this.handleStartButtonClick} />
          <CardsBoard shuffledIcons={shuffledIcons} cardClickHandler={this.handleCardClick} />
        </div>
    );
  }
}
