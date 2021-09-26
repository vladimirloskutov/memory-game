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
    return (
        <div className="app w-75 mx-auto" >
          <ControlPanel startButtonClickHandler={this.handleStartButtonClick} />
          <CardsBoard />
        </div>
    );
  }
}
