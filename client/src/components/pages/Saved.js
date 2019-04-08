import React from 'react';
import Card from '../Card/Card';

const Saved = (props) => {

    return (
        <div>
            <div className="row">
                {props.data.map((book, index) =>
                    <Card
                        title={book.title}
                        key={index}
                        id={book._id}
                        desc={book.description}
                        link={book.link}
                        img={book.image}
                        action={props.delete}
                        txt="Delete"
                        author={book.authors ? book.authors.join(", ") : ""} />)}
            </div>
        </div>
    )
}

export default Saved;