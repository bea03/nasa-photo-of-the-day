import React from 'react';

function NasaCards(props) {
    return (
        <div>
            <h1>NASA Photo of the Day:</h1>
            <h2>{props.title}</h2>
            <p>{props.date}</p>
            <img src={props.url} alt=""></img>
            <p>{props.explanation}</p>
            <p>{props.copyright}</p>
        </div>
    );
}

export default NasaCards;