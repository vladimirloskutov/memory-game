import React from "react";

export default class GameResultsTable extends React.Component {
  renderTableRows(items) {
    return items.map((item, index) => {
      return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item} s</td>
          </tr>
      );
    });
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