import React from 'react';

const Card = (props) => {
    return (
        <div className="col s12">
            <div className="card horizontal">
                <div className="card-image">
                    <img src={props.img} alt={props.title} />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <span className="card-title">{props.title}</span>
                        <h6>{props.author}</h6>
                        <p>{props.desc}</p>
                    </div>
                    <div className="card-action">
                        <a href={props.link}>More Info</a>
                        <button className="btn" data-index={props.id} onClick={() => props.action(props.id)}>{props.txt}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;