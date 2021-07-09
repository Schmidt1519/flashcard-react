import React, { useState } from 'react';
import EditCard from '../EditCard/editCard';
import './cardViewer.css';

function CardViewer(props) {

    const [cardNumber, setCardNumber] = useState(0);
    console.log(props)   // test

    if(props.cards.length === 0){
        return(null)
    }

    else{
        function goToNextCard(){
            console.log("go to next card beginning of function")
            let tempCardNumber = cardNumber;
            tempCardNumber++;
            if(tempCardNumber === props.cards.length){
                tempCardNumber = 0;
            }
            setCardNumber(tempCardNumber)
            console.log(tempCardNumber)
            console.log("go to next card end of function")
        }

        function goToPreviousCard(){
            console.log("go to previous card beginning of function")
            let tempCardNumber = cardNumber;
            tempCardNumber--;
            if(tempCardNumber < 0){
                tempCardNumber = props.cards.length - 1
            }
            setCardNumber(tempCardNumber)
            console.log(tempCardNumber)
            console.log("go to previous card end of function")
        }
        
        // console.log(cards)
        console.log(props.cards)

        return(
            <div className='row row-spacer'>
                <div className ='col-md-4'>
                    <button class="btn btn-outline-primary" onClick={() => goToPreviousCard()}>Previous Card</button>
                </div>
                <div className='col-md-4'>
                    <div className="flashcard">
                    <h1>{props.cards[cardNumber].term} </h1>
                    <h2>{props.cards[cardNumber].definition}</h2>
                    <h3>{cardNumber + 1} / {props.cards.length}</h3>
                    </div>
                </div>
                <div className='col-md-4'>
                    <button class="btn btn-outline-primary" onClick={() => goToNextCard()}>Next Card</button>
                </div>
                <div className='edit-card'>
                    <EditCard cards={props.cards[cardNumber]} collections={props.collections}
                            collectionIsSelected={props.collectionIsSelected}/>
                </div>
            </div>
    )}
}

export default CardViewer;