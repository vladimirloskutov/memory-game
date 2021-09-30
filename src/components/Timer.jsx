import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ game }) => {
  const { gameTimer } = game;
  return { gameTimer };
};

const Timer = ({ gameTimer }) => (<div className="d-inline h2">Time: {gameTimer} s</div>);

export default connect(mapStateToProps)(Timer);
