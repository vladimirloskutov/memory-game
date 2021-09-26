import React from "react";

export default class Card extends React.Component {
  handleCardClick = (e) => {
    this.props.cardClickHandler(e.target.id);
  };

  render() {
    const { id, data } = this.props;
    const { value, status } = data;
    let card;

    switch (status) {
      case 'closed':
        card = (
            <div className="col-2 mb-4">
              <div className="card bg-warning">
                <div id={id} className="card-body" onClick={this.handleCardClick}>
                  <span className="invisible">{value}</span>
                </div>
              </div>
            </div>
        );
        break;
      case 'opened':
        card = (
            <div className="col-2 mb-4">
              <div className="card">
                <div className="card-body text-center font-weight-bold">{value}</div>
              </div>
            </div>
        );
        break;
      case 'deleted':
        card = (
            <div className="col-2">
              <div>
                <div className="card-body"></div>
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
