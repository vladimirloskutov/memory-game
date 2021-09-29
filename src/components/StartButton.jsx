import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const { gameStatus } = state;
  return { gameStatus };
};

class StartButton extends React.Component {
  handleStartButtonClick = () => {
    const { dispatch, gameStatus } = this.props;
    switch (gameStatus) {
      case 'initial':
        this.gameTimerId = setInterval(() => {
          dispatch({ type: 'started', payload: { gameTimerId: this.gameTimerId } });
        }, 1000);
        break;
      case 'started':
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