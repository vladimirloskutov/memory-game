import React from "react";
import ControlPanel from "./ControlPanel";
import CardsBoard from "./CardsBoard";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStatus: null,
      gameTimer: 0,
    };
  }

  render() {
    return (
        <div className="app w-75 mx-auto" >
          <ControlPanel />
          <CardsBoard />
        </div>
    );
  }
}
