import React, { useState } from 'react';
import EditCard from '../EditCard/editCard';
import './cardViewer.css';

function CardViewer(props) {

    const [cardNumber, setCardNumber] = useState(0);

    if(props.cards.length === 0){
        return(null)
    }

    else{
        function goToNextCard(){
            let tempCardNumber = cardNumber;
            tempCardNumber++;
            if(tempCardNumber === props.cards.length){
                tempCardNumber = 0;
            }
            setCardNumber(tempCardNumber)
        }

        function goToPreviousCard(){
            let tempCardNumber = cardNumber;
            tempCardNumber--;
            if(tempCardNumber < 0){
                tempCardNumber = props.cards.length - 1
            }
            setCardNumber(tempCardNumber)

        }

        return(
            <div className='row row-spacer'>
                <div className ='col-md-4'>
                    <button className="btn btn-outline-primary" onClick={() => goToPreviousCard()}>Previous Card</button>
                </div>
                <div className='col-md-4'>
                    <div className="flashcard">
                    <h1>{props.cards[cardNumber].term} </h1>
                    <h2>{props.cards[cardNumber].definition}</h2>
                    <h3>{cardNumber + 1} / {props.cards.length}</h3>
                    </div>
                </div>
                <div className='col-md-4'>
                    <button className="btn btn-outline-primary" onClick={() => goToNextCard()}>Next Card</button>
                </div>
                <div className='edit-card'>
                    <EditCard cards={props.cards[cardNumber]} collections={props.collections}
                            collectionIsSelected={props.collectionIsSelected}/>
                </div>
            </div>
    )}
}

export default CardViewer;