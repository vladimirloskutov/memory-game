import React from "react";
import StartButton from "./StartButton";
import Timer from "./Timer";

export default class ControlPanel extends React.Component {
  handleStartButtonClick = () => {
    const { startButtonClickHandler } = this.props;
    startButtonClickHandler();
  };

  render() {
    const { gameTimer } = this.props;
    return (
      <div className="row col-6 mb-5">
        <div className="col-2 mr-5">
          <StartButton startButtonClickHandler={this.handleStartButtonClick} />
        </div>
        <div className="col-6">
          <Timer gameTimer={gameTimer} />
        </div>
      </div>
    );
  }
}
