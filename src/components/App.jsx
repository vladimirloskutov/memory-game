import React from "react";
import ControlPanel from "./ControlPanel";
import CardsBoard from "./CardsBoard";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9',
        '1', '2', '3', '4', '5', '6', '7', '8', '9',
        '!', '@', '#', '$', '%', '^', '&', '*', '-',
        '!', '@', '#', '$', '%', '^', '&', '*', '-',
      ],
    };
  }

  render() {
    return (
        <div className="app w-75 mx-auto">
          <ControlPanel />
          <CardsBoard />
        </div>
    );
  }
}
