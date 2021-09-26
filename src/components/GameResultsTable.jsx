import React from "react";

export default class GameResultsTable extends React.Component {
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
            <tr>
              <td>1</td>
              <td>72 s</td>
            </tr>
            <tr>
              <td>2</td>
              <td>109 s</td>
            </tr>
          </tbody>
        </table>
    );
  }
}