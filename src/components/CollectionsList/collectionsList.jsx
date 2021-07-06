import React, { useState } from 'react';

function CollectionsList(props) {
    console.log(props);

    let collectionList = props.collections.map(function(collection){ 
        return <li key={collection.id}>
            {collection.title}</li>
    });

    return(
        <div>
            <h1> Collections: </h1>
                <ul>
                    {collectionList}
                </ul>       
        </div>
    )
}

export default CollectionsList;