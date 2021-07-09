// import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import useForm from '../UseForm/useForm';
import axios from 'axios';
import './createCardForm.css';

const CreateCardForm = (props) => {
    const { values, handleChange, handleSubmit } = useForm(createCard);
    const [card, setCard] = useState(props.cards);

    async function createCard() {
        const addCard = {...values, collection: props.collectionIsSelected};
        try{
            let response = await axios.post(`http://127.0.0.1:8000/collection/card/${props.collectionIsSelected}/new/`, addCard)
            setCard(response.data)
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="add-card">
            <h1>Add Card: </h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Term:
                    <input
                        type="text" 
                        name="term"
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

export default CreateCardForm;