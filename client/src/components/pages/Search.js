import React from 'react';
import Card from "../Card/Card";

const Search = (props) => {
    console.log(props.data);
    return (
        <div>
            <div className="row">
                <div className="col s12">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Book Search</span>
                            <form>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="book" type="text" className="validate" onChange={props.change} value={props.val} />
                                        <label htmlFor="book">Book</label>
                                    </div>
                                </div>
                                <button className="btn waves-effect waves-light" type="submit" name="action" onClick={props.click}>Submit
                            </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                {props.data.map((book, index) =>
                    <Card
                        title={book.volumeInfo.title}
                        key={index}
                        desc={book.volumeInfo.description}
                        link={book.volumeInfo.infoLink}
                        img={book.volumeInfo.imageLinks.thumbnail}
                        author={book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "" } />)}
            </div>
        </div>
    )
};

export default Search;