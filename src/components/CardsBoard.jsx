import React from "react";
import Card from "./Card";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const { shuffledIcons } = state;
  return { shuffledIcons };
};

class CardsBoard extends React.Component {
  renderCardsBoard(items) {
    return items.map((item, index) => <Card key={index} id={index} />);
  }

  render() {
    const { shuffledIcons } = this.props;

    return (
      <div
          className="row mb-5"
      >
        {this.renderCardsBoard(shuffledIcons)}
      </div>
    );
  }
}

export default connect(mapStateToProps)(CardsBoard);
