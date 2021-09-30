import React from "react";
import { connect } from "react-redux";

const mapStateToProps = ({ game }) => {
  const { gameResults } = game;
  return { gameResults };
};

class GameResultsTable extends React.Component {
  renderTableRows(items) {
    return items.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item} s</td>
          </tr>
    ));
  }

  render() {
    const { gameResults } = this.props;

    return (
      <table className="table">
        <thead>
        <tr>
          <th>#</th>
          <th>Round time</th>
        </tr>
        </thead>
        <tbody>
        {this.renderTableRows(gameResults)}
        </tbody>
      </table>
    );
  }
}

export default connect(mapStateToProps)(GameResultsTable);