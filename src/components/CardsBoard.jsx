import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

const mapStateToProps = ({ icons }) => {
  const { shuffledIcons } = icons;
  return { shuffledIcons };
};

const CardsBoard = ({ shuffledIcons }) => {
  const cardsBoard = shuffledIcons.map((icon, index) => <Card key={index} cardId={index} />);

  return (
    <div className="row mb-5">
      {cardsBoard}
    </div>
  );
};

export default connect(mapStateToProps)(CardsBoard);
