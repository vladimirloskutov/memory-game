import React from "react";
import StartButton from "./StartButton";
import Timer from "./Timer";

export default class ControlPanel extends React.Component {
  handleStartButtonClick = () => {
    const { startButtonClickHandler } = this.props;
    startButtonClickHandler();
  };

  render() {
    return (
      <div className="control-panel mt-3 mb-5 mx-auto">
        <div className="row">
          <div className="col-2">
            <StartButton startButtonClickHandler={this.handleStartButtonClick} />
          </div>
          <div className="col-4">
            <Timer />
          </div>
        </div>
      </div>
    );
  }
}
