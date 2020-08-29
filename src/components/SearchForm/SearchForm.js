import React from "react";

const SearchForm = props => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="breedInput">Breed Name:</label>
            <input 
            type="text"
            className="form-control"
            id="breedInput"
            placeholder="Type a dog breed"
            list="breeds"
            onChange={props.handleInput}
            value={props.search}
            />
            <datalist id="breeds">

            </datalist>
            </div>
        </form>
    )
}

export default SearchForm;