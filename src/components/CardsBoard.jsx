import React from "react";
import Card from "./Card";
import { connect } from "react-redux";

const mapStateToProps = ({ icons }) => {
  const { shuffledIcons } = icons;
  return { shuffledIcons };
};

const CardsBoard = (props) => {
  const { shuffledIcons } = props;
  const cardsBoard = shuffledIcons.map((icon, index) => <Card key={index} cardId={index} />);

  return (
      <div
          className="row mb-5"
      >
        {cardsBoard}
      </div>
  );
};

export default connect(mapStateToProps)(CardsBoard);
