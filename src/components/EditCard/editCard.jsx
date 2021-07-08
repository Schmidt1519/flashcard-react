import React, { useState } from 'react';
import useForm from '../UseForm/useForm';
import axios from 'axios'
import CardViewer from '../CardViewer/cardViewer';

const EditCard = (props) => {
    const { values, handleChange, handleSubmit } = useForm(() => editCard(props.cards.id, values));
    const [card, setCard] = useState(props.cards);

    console.log(props)  // shows all 4 collections, current cards and current collectionIsSelected id.
    console.log(props.cards)  // shows whichever collection I am currently viewing.
    console.log(card)  // always shows whichever collection is originally click on, even after switching.
    console.log(card.id)  // undefined

    async function editCard(id, values) {
        const editFlashcard = {collection: props.cards.collection, ...values};
        console.log(editFlashcard);  // test
        try{
            console.log("edit a card request is called")  // test
            let response = await axios.put(`http://127.0.0.1:8000/collection/card/${id}/update/`, editFlashcard)
        setCard(response.data)
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <h1>Edit card: </h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Term: 
                    <input 
                        type="text" 
                        name="term"
                        placeholder={props.cards.term}
                        onChange={handleChange}
                        value={values.term}
                        required={true}
                    />
                </label>
                <label>
                    Definition: 
                    <input 
                        type="text" 
                        name="definition"
                        placeholder={props.cards.definition}
                        onChange={handleChange}
                        value={values.definition}
                        required={true}
                    />
                </label>
                <button type="submit">Edit Card</button>
            </form>
        </div>
    )
}

export default EditCard;