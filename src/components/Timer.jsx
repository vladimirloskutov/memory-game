import React from "react";
import { connect } from "react-redux";

const mapStateToProps = ({ game }) => {
  const { gameTimer } = game;
  return { gameTimer };
};

class Timer extends React.Component {
  render() {
    const { gameTimer } = this.props;

    return (
        <div
            className="d-inline h2"
        >
          Time: {gameTimer} s
        </div>
    );
  }
}

export default connect(mapStateToProps)(Timer);
