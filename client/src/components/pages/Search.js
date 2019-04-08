import React from 'react';

const Search = (props) => {
    return (
        <div className="row">
            <div className="col s12">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">Book Search</span>
                        <form>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="book" type="text" className="validate" onChange={props.change} value={props.val}/>
                                    <label htmlFor="book">Book</label>
                                </div>
                            </div>
                            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Search;