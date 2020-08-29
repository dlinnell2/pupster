import React, { Component } from "react";
import SearchForm from "../components/SearchForm"

class Search extends Component {

    state = {
        breedList:[]
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="text-center">Search by dog breed!</h1>
                </div>
                <SearchForm />
            </div>
        )
    }
}

export default Search;