import React from "react";
import StartButton from "./StartButton";
import Timer from "./Timer";

export default class ControlPanel extends React.Component {
  render() {
    return (
      <div className="row col-12 mb-5">
        <div className="col-12 mr-5">
          <StartButton />
        </div>
        <div className="col-12 mt-5">
          <Timer />
        </div>
      </div>
    );
  }
}
