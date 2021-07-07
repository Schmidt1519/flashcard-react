import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import CreateCardForm from './components/CreateCardFrom/createCardForm';
import CollectionsList from './components/CollectionsList/collectionsList';
import CardsList from './components/CardsList/cardsList';
import EditCard from './components/EditCard/editCard';


function App() {

  const [collections, setCollections] = useState([]);
  const [cards, setCards] = useState([]);
  const [collectionIsSelected, setCollectionIsSelected] = useState(null);
  
  useEffect(() => {
    getAllCollections();
    // getAllCards(collections.id);
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

  let getAllCards = async (id) => {
    try{
      console.log("get all Cards request is called")  // test
      let response = await axios.get(`http://127.0.0.1:8000/collection/card/${id}/`);
      console.log(response.data)  // test
      setCards(response.data)
      setCollectionIsSelected(id);
    }
    catch(err) {
      console.log(err);
    }
  }

  return (
    <React.Fragment>
    <div>
      <h1 className='text-center'>Flashcards</h1>
      <CollectionsList collections={collections} cards={cards} getAllCards={getAllCards}/>
      <CardsList cards={cards} />
      <CreateCardForm collections={collections} cards={cards} collectionIsSelected={collectionIsSelected} />
      {/* <EditCard collections={collections} cards={cards}/> */}
    </div>
  
    </React.Fragment>
  );
}

export default App;
