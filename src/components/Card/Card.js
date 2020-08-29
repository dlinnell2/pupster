import React from "react";
import "./Card.css"
import CardBtn from "../CardBtn"

const Card = props => {
    return (
        <div className="card">
            <img className="card-img-top" src="https://images.dog.ceo/breeds/hound-walker/n02089867_3456.jpg" />
                <CardBtn style="danger" onClick={props.handleBtnClick} />
                <CardBtn style="success" onClick={props.handleBtnClick} />
            

        </div>
    )

}

export default Card;