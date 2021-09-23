import React from "react";

export default class Card extends React.Component {
  render() {
    const { id, value, status } = this.props.data;
    let card;

    switch (status) {
      case 'closed':
        card = (
            <div className="col-2 mb-4">
              <div className="card bg-warning">
                <div id={id} className="card-body" onClick={this.handleClick}></div>
              </div>
            </div>
        );
        break;
      case 'opened':
        card = (
            <div className="col-2 mb-4">
              <div className="card">
                <div id={id} className="card-body" onClick={this.handleClick}>{value}</div>
              </div>
            </div>
        );
        break;
      case 'deleted':
        card = (
            <div className="col-2 mb-4">
              <div className="card bg-white">
                <div id={id} className="card-body" onClick={this.handleClick}></div>
              </div>
            </div>
        );
        break;
      default:
        throw new Error(`Unknown card status: ${status}`);
    }

    return card;
  }
}
