import React from "react";

export default class StartButton extends React.Component {
  handleStartButtonClick = () => {
    const { startButtonClickHandler } = this.props;
    startButtonClickHandler();
  };

  render() {
    return (
      <button type="button" className="btn btn-primary btn-lg" onClick={this.handleStartButtonClick}>START</button>
    );
  }
}
