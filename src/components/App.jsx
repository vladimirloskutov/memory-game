import React from "react";
import ControlPanel from "./ControlPanel";
import CardsBoard from "./CardsBoard";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStatus: null,
      gameTimer: 0,
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.gameStatus === 'started') {
      this.timerID = setTimeout(() => {
        this.setState({ gameTimer: prevState.gameTimer + 1 });
      }, 1000);
    }
  }

  handleStartButtonClick = () => {
    const { gameStatus } = this.state;
    let newGameStatus;

    switch (gameStatus) {
      case null:
        newGameStatus = 'started';
        break;
      case 'started':
        newGameStatus = 'finished';
        break;
      default:
        throw new Error(`Unknown game status: ${gameStatus}`);
    }

    this.setState({ gameStatus: newGameStatus });
  };

  render() {
    const { gameTimer } = this.state;
    return (
        <div className="app w-75 mx-auto" >
          <ControlPanel gameTimer={gameTimer} startButtonClickHandler={this.handleStartButtonClick} />
          <CardsBoard />
        </div>
    );
  }
}
