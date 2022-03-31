import React, { useState } from "react";

function Main() {
    const [t] = useState();


    return (
        <div className="main-board">
            <div className="main-board_panel">
                
            </div>
            <Board />
        </div>
    );
}