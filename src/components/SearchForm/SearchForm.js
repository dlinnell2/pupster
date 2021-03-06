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
                    {props.breeds.map(breed => <option value={breed} key={breed} />)}
                </datalist>

            </div>
            <button
                type="sumbit"
                onClick={props.handleFormSubmit}
                className="btn btn-success searchButton"
            >
                Search
                </button>
        </form>
    )
}

export default SearchForm;