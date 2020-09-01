import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import API from "../utils/API"

class Search extends Component {

    state = {
        breeds:[],
        search:"",
        results:[]
    }

    componentDidMount(){
        API.getBreedList()
        .then(res => {
            const breeds = Object.keys(res.data.message);
            this.setState({
                breeds: breeds
            })
        })
        .catch(err => console.log(err))
    }

    handleInput = event => {
        this.setState({search:event.target.value})
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.getBreedImages(this.state.search)
        .then(res => this.setState({
            results:res.data.message
        }))
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="text-center">Search by dog breed!</h1>
                </div>
                <SearchForm 
                breeds={this.state.breeds}
                handleInput={this.handleInput}
                search={this.state.search}
                handleFormSubmit={this.handleFormSubmit}
                />
                <SearchResults
                results={this.state.results}/>
            </div>
        )
    }
}

export default Search;