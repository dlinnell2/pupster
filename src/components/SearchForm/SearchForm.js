import React from "react";

const SearchForm = props => {
    return (
        <form>
            <div className="form-group">
                <label for="breedInput">Breed Name:</label>
            <input 
            type="text"
            className="form-control"
            id="breedInput"
            placeholder="Type a dog breed"
            />
            </div>
        </form>
    )
}

export default SearchForm;