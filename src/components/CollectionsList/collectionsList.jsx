import React from 'react';

function CollectionsList(props) {
    console.log(props);

    // [selectedCollection, setSelectedCollection] = useState([props.collections.id[0]])

        let collectionList = props.collections.map(collection => {
        return <li onClick={() => props.getAllCards(collection.id)} key={collection.id}>{collection.title}</li>  // add onclick trigger 
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