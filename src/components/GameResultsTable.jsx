import React from "react";
import { connect } from "react-redux";

const mapStateToProps = ({ game }) => {
  const { gameResults } = game;
  return { gameResults };
};

const GameResultsTable = (props) => {
  const { gameResults } = props;
  const tableRows = gameResults.map((result, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{result} s</td>
      </tr>
  ));

  return (
      <table className="table">
        <thead>
        <tr>
          <th>#</th>
          <th>Round time</th>
        </tr>
        </thead>
        <tbody>
        {tableRows}
        </tbody>
      </table>
  );
};

export default connect(mapStateToProps)(GameResultsTable);