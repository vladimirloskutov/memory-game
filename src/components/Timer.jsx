import React from "react";

export default class Timer extends React.Component {
  render() {
    const { gameTimer } = this.props;
    return (
        <div className="h1 d-inline">Time has passed: {gameTimer} s</div>
    );
  }
}
