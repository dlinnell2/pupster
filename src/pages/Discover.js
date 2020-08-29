import React, { Component } from "react";
import Card from "../components/Card";
import Alert from "../components/Alert";
import API from "../utils/API"

class Discover extends Component {

    state = {
        image: "",
        match: false,
        matchCount: 0,
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
            newState.match = 1 === Math.floor(Math.random() * 5) + 1

            newState.matchCount = newState.match
                ? newState.matchCount +1
                : newState.matchCount

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
                <h5 className="text-center">You've matched with {this.state.matchCount} dogs so far!</h5>
                <Alert />
            </div>
        )
    }

}

export default Discover;