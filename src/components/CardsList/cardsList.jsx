import React from 'react';
import CardViewer from '../CardViewer/cardViewer';

function CardsList(props) {

    props.cards.map(card => { 
        return <li key={card.id}>
            {card.term} - {card.definition}</li>
    });

    return(
        <div className="cards-list">
                <ul>
                    <CardViewer cards={props.cards} collections={props.collections}
                                collectionIsSelected={props.collectionIsSelected}/>
                </ul>  
        </div>
    )
}

export default CardsList;