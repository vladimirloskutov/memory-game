import React from "react";
import { connect } from "react-redux";
import {startGame} from "../actions";

const mapStateToProps = ({ game }) => {
  const { gameStatus } = game;
  return { gameStatus };
};

class StartButton extends React.Component {
  handleStartButtonClick = () => {
    const { dispatch, gameStatus } = this.props;
    switch (gameStatus) {
      case 'GAME_INITIAL':
        this.gameTimerId = setInterval(() => {
          dispatch(startGame(this.gameTimerId));
        }, 1000);
        break;
      case 'GAME_STARTED':
        break;
      default:
        throw new Error(`Unknown game status: ${gameStatus}`);
    }
  }

  render() {
    return (
      <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={this.handleStartButtonClick}
      >
        START
      </button>
    );
  }
}

export default connect(mapStateToProps)(StartButton);