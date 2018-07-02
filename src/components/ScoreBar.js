import React from "react";

const ScoreBar = props => (
        
    <div className="sticky-top row justify-content-around text-center md-text-right pt-3 pb-2">
        <h3 className="col-lg-4">{props.message}</h3>
        <h3 className="col-lg-4">Score: {props.score} | Top Score: {props.topScore}</h3>
    </div>
    
);

export default ScoreBar;