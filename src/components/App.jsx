import React from "react";
import ControlPanel from "./ControlPanel";
import CardsBoard from "./CardsBoard";
import GameResultsTable from "./GameResultsTable";

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-3">
                        <ControlPanel />
                        <GameResultsTable />
                    </div>
                    <div className="col-9">
                        <CardsBoard />
                    </div>
                </div>
            </div>
        );
    }
}
