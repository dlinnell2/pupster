import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import API from "../utils/API"

class Search extends Component {

    state = {
        breedList:[],
        search:"",
        results:[]
    }

    componentDidMount(){
        API.getBreedList()
        .then(res => this.setState({
            breedList:res.data.message
        }))
        .catch(err => console.log(err))
    }

    handleInput = event => {
        this.setState({search:event.target.value})
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="text-center">Search by dog breed!</h1>
                </div>
                <SearchForm 
                datalist={this.state.breedList}
                handleInput={this.handleInput}
                search={this.state.search}
                />
            </div>
        )
    }
}

export default Search;