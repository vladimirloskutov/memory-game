import React from 'react';
import StartButton from './StartButton';
import Timer from './Timer';

const ControlPanel = () => (
  <div className="row col-12 mb-5">
    <div className="col-12 mr-5">
      <StartButton />
    </div>
    <div className="col-12 mt-5">
      <Timer />
    </div>
  </div>
);

export default ControlPanel;
