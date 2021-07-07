import React, { useState } from 'react';

function CardsList(props) {
    console.log(props);

    // const [collections, setCollection] = useState(props.collections)

    let cardsList = props.cards.map(card => { 
        return <li key={card.id}>
            {card.term} - {card.definition}</li>

            // filter cards here by collection id OR filter on back end

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