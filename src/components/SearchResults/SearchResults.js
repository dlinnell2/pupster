import React from "react";

const SearchResults = props => {
    return(
        <ul className="list-group">
            {props.results.map(result => 
                <li key={result} className="list-group-item">
                    <img src={result} alt="Dog" className="img-fluid"/>
                </li>)}
        </ul>
    )
}

export default SearchResults;