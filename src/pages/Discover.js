import React, { Component } from "react";
import Card from "../components/Card";
import CardBtn from "../components/CardBtn";
import API from "../utils/API"

class Discover extends Component {

    state = {
        image: "",
        match: false,
    }

    componentDidMount(){
        this.loadNextDog();
    }

    loadNextDog = () => {
        API.getRandomDog()
            .then(res => this.setState({
                image:res.data.message
            }))
            .catch(err => console.log(err))
    }

    handleBtnClick = (event) => {

        const type = event.target.attributes.getNamedItem("data-value").value;
        const newState = {...this.state};

        if (type === "success"){
            newState.match = true;
        } else {
            newState.match = false;
        }

        this.setState(newState);
        this.loadNextDog();

    }

    render() {
        return (
            <div>

                <h1 className="text-center">Make new friends!</h1>
                <h3 className="text-center">Click green on any dogs you'd like to meet!</h3>

                <Card image={this.state.image} onClick={this.handleBtnClick}/>
            </div>
        )
    }

}

export default Discover;