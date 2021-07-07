import React, { useState } from 'react';

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
            console.log("go to previous card end of function")
        }

        return(
            <div className='row row-spacer'>
                <div className ='col-md-4'>
                    <button onClick={() => goToPreviousCard()}>Previous Card</button>
                </div>
                <div className='col-md-4'>
                    <h1>{props.cards[cardNumber].term}</h1>
                    <h2>{props.cards[cardNumber].definition}</h2>
                    {/* <h3>{props.cards[cardNumber].id}/{props.cards.length}</h3> */}
                    <h3>{cardNumber + 1}/{props.cards.length}</h3>
                </div>
                <div className='col-md-4'>
                    <button onClick={() => goToNextCard()}>Next Card</button>
                </div>
            </div>
    )}
}

export default CardViewer;