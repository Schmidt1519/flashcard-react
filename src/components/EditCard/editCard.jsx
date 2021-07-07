import React, { useState } from 'react';
import useForm from '../UseForm/useForm';
import axios from 'axios'

// change to modal?

const EditCard = (props) => {
    const { values, handleChange, handleSubmit } = useForm(editCard);
    // const [term, setTerm] = useState("");
    // const [definition, setDefinition] = useState("");
    // const [collection, setCollection] = useState(props.collections);
    const [card, setCard] = useState(props.cards)

    console.log(props)  // test

    async function editCard() {
        const editFlashcard = {...values, ['collection']: props.collectionIsSelected};
        console.log(editFlashcard);  // test
        try{
            console.log("edit a card request is called")  // test

            // fix collection ID in Axios Post request!!

            let response = await axios.put(`http://127.0.0.1:8000/collection/card/${values.collection}/update/`, editFlashcard)
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
                        // placeholder={cards.term}
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
                        // placeholder={cards.definition}
                        onChange={handleChange}
                        value={values.definition}
                        required={true}
                    />
                </label>
                <label>
                    Collection: 
                    <input 
                        type="text" 
                        name="collection"
                        // placeholder={cards.collection}
                        onChange={handleChange}
                        value={values.collection}
                        required={true}
                    />
                </label>
                <button type="submit">Edit Card</button>
            </form>
        </div>
    )
}

export default EditCard;