import React from "react";

const ScoreBar = props => (
        
    <div className="sticky-top">
        <h3 className="msg">{props.message}</h3>
        <h3>Score: {props.score} | Top Score: {props.topScore}</h3>
    </div>
    
);

export default ScoreBar;