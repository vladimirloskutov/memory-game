import React from "react";
import Card from "./Card";

export default class CardsBoard extends React.Component {
  render() {
    return (
      <div className="cards-board ml-5">
        <div className="row mb-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="row mb-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="row mb-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="row mb-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="row mb-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="row mb-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}
