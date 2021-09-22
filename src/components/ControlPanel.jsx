import React from "react";
import StartButton from "./StartButton";
import Timer from "./Timer";

export default class ControlPanel extends React.Component {
  render() {
    return (
      <div className="control-panel mt-3 mb-5 mx-auto">
        <div className="row">
          <div className="col-2">
            <StartButton />
          </div>
          <div className="col-4">
            <Timer />
          </div>
        </div>
      </div>
    );
  }
}
