import React from "react";


const ClickImages = props => (
    
    <div 
    className="click-img" 
    key={props.id} 
    onClick={ () => props.imgClick(props.id, props.clicked) }
    >
        <img id={props.name} src={props.image} alt={props.name}  />
    </div>
    
);

export default ClickImages;

