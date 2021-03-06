import React from "react";
import "./Card.css"
import CardBtn from "../CardBtn"

const Card = props => {
    return (
        <div className="card">
            <img className="card-img" src={props.image} />
                <CardBtn data-value="danger" onClick={props.onClick} />
                <CardBtn data-value="success" onClick={props.onClick} />
        </div>
    )

}

export default Card;