import React from "react";
import { connect } from "react-redux";
import {startGame} from "../actions";

const mapStateToProps = ({ game }) => {
  const { gameStatus } = game;
  return { gameStatus };
};

const StartButton = (props) => {
  const handleStartButtonClick = () => {
    const { dispatch, gameStatus } = props;
    switch (gameStatus) {
      case 'GAME_INITIAL':
        const gameTimerId = setInterval(() => {
          dispatch(startGame(gameTimerId));
        }, 1000);
        break;
      case 'GAME_STARTED':
        break;
      default:
        throw new Error(`Unknown game status: ${gameStatus}`);
    }
  }

  return (
      <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={handleStartButtonClick}
      >
        START
      </button>
  );
};

export default connect(mapStateToProps)(StartButton);