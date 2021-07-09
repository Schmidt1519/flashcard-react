import React, { useState } from 'react';
import useForm from '../UseForm/useForm';
import axios from 'axios'
import './editCard.css'

const EditCard = (props) => {
    const { values, handleChange, handleSubmit } = useForm(() => editCard(props.cards.id, values));
    const [card, setCard] = useState(props.cards);

    async function editCard(id, values) {
        const editFlashcard = {collection: props.cards.collection, ...values};
        try{
            let response = await axios.put(`http://127.0.0.1:8000/collection/card/${id}/update/`, editFlashcard)
        setCard(response.data)
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="edit-card-form">
            <h1>Edit card: </h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Term: 
                    <input 
                        type="text" 
                        name="term"
                        placeholder={props.cards.term}
                        onChange={handleChange}
                        value={values.term || '' }
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
                        value={values.definition || '' }
                        required={true}
                    />
                </label>
                <button className="btn btn-light" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditCard;