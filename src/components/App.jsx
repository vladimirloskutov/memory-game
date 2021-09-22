import React from "react";
import ControlPanel from "./ControlPanel";
import StartButton from "./StartButton";
import Timer from "./Timer";
import CardsBoard from "./CardsBoard";

export default class App extends React.Component {
  render() {
    return (
        <div className="app w-75 mx-auto">
          <ControlPanel>
            <StartButton />
            <Timer />
          </ControlPanel>
          <CardsBoard />
        </div>
    );
  }
}
