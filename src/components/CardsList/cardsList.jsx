import React, { useState } from 'react';

function CardsList(props) {
    console.log(props);

    let cardsList = props.cards.map(function(card){ 
        return <li key={card.id}>
            {card.term} - {card.definition}</li>
    });

    return(
        <div>
            <h1> Cards: </h1>
                <ul>
                    {cardsList}
                </ul>  
        </div>
    )
}

export default CardsList;