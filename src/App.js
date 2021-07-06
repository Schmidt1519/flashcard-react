import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import CreateCardForm from './components/CreateCardFrom/createCardForm';


function App() {

  const [collections, setCollections] = useState({});
  const [cards, setCards] = useState({});
  // const [currentCollection, setCurrentCollection] = useState({});

  useEffect(() => {
    getAllCollections();
    getAllCards();
  }, []);
  
  let getAllCollections = async () => {
    try{
      console.log("get all Collections request is called")  // test
      let response = await axios.get('http://127.0.0.1:8000/collection/');
      console.log(response.data)  // test
      setCollections(response.data)
    }
    catch(err) {
      console.log(err);
    }
  }

  let getAllCards = async () => {
    try{
      console.log("get all Cards request is called")  // test
      let response = await axios.get('http://127.0.0.1:8000/collection/card/');
      console.log(response.data)  // test
      setCards(response.data)
    }
    catch(err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1> Collections: </h1>
        {/* <ul>{ collections.map(collection=>(
            <li>{collection.title}</li>))} </ul> */}
    <CreateCardForm collections={collections} cards={cards}/>
    </div>
  );
}

export default App;
