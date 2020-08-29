import React, { Component } from "react";
import Card from "../components/Card";
import CardBtn from "../components/CardBtn";
import API from "../utils/API"

class Discover extends Component {

    state = {
        image: ""
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

    render() {
        return (
            <div>

                <h1 className="text-center">Make new friends!</h1>
                <h3 className="text-center">Click green on any dogs you'd like to meet!</h3>

                <Card image={this.state.image}/>
            </div>
        )
    }

}

export default Discover;