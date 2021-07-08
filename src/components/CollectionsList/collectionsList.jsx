import React, { useState } from 'react';
import './collectionsList.css';

function CollectionsList(props) {
    console.log(props);
        let collectionList = props.collections.map(collection => {
            if(props.collectionIsSelected == collection.id){ 
                console.log("match");      
                    return <li className="collections-list-item-active"
                        onClick={() => props.getAllCards(collection.id)} 
                        key={collection.id}>{collection.title}</li>
            }
            else{
                return <li className="collections-list-item"
                    onClick={() => props.getAllCards(collection.id)} 
                    key={collection.id}>{collection.title}</li> 
            }
    });

    return(
        <div className='collections-list'>
            <h1> Collections: </h1>
                <ul>
                    {collectionList}
                </ul>       
        </div>
    )
}

export default CollectionsList;