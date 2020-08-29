import React from "react";
import "./CardBtn.css";

const CardBtn = props => {
    return(
        <button 
        className = {`card-btn btn-${props.style}`}
        onClick = {props.onClick}
        />
    )
}

export default CardBtn