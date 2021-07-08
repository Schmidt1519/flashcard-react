import React from 'react';
import CardViewer from '../CardViewer/cardViewer';

function CardsList(props) {
    console.log(props);

    props.cards.map(card => { 
        return <li key={card.id}>
            {card.term} - {card.definition}</li>
    });

    return(
        <div>
            {/* <h1> Cards: </h1> */}
                <ul>
                    <CardViewer cards={props.cards} collections={props.collections}
                                collectionIsSelected={props.collectionIsSelected}/>
                </ul>  
        </div>
    )
}

export default CardsList;