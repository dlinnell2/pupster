import React from "react";
import "./CardBtn.css";

const CardBtn = props => {
    return(
        <button 
        className = {`card-btn btn-${props["data-value"]}`}
        onClick = {props.onClick}
        {...props}
        />
    )
}

export default CardBtn