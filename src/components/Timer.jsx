import React from "react";

export default class Timer extends React.Component {
  render() {
    const { gameTimer } = this.props;
    return (
        <div className="d-inline h1">Time: {gameTimer} s</div>
    );
  }
}
