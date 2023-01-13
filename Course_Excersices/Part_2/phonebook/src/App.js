import './App.css';
import { useState } from 'react';
import Add from './components/Add';
import Setfilter from './components/Setfilter';
import Display from './components/Display';
import { useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', contact: 65654446 }
  ])
  useEffect(()=>{
    axios.get('http://localhost:3001/persons')
    .then(response => setPersons(response.data))
  }, [])
    const [newName, setNewName] = useState('')
    const [newcontact, setNewcontact] = useState('')
    const [show, setShow] = useState([{name: 'Arto Hellas', contact: 65654446}])
    const [newfilter, setNewfilter] = useState('')
  const changing = (event) => {
    setNewName((event.target.value))
  }
  const changingfilter = (event) => {
    setNewfilter((event.target.value))
  }
  const changingcontact = (event) => {
    setNewcontact((event.target.value))
  }
  const addobj = {
    name: newName,
    contact: newcontact
    // date: new Date().toISOString(),
    // important: Math.random() < 0.5,
    // id: notes.length + 1,
  }
  const filtering = () => {
    setShow(persons.filter(persons => persons.name === newfilter))
    console.log(show)
   }
   
   const addnew = (event) => {
    console.log(newName)
    setPersons(persons.concat(addobj))
    console.log(persons)
    alert(`${addobj.name} was Added with contact No. as ${addobj.contact}`)
    event.preventDefault()
  }
  return (
    <div>
      <h2>Add a New</h2>
      <Add addnew={addnew} changing={changing} changingcontact={changingcontact}/>
      <h3>Filter</h3>
      <Setfilter changingfilter={changingfilter} filtering={filtering}/>
      <Display persons={persons} show={show}/>
      {/* <h2>Phonebook</h2>
        <div>
          Filter shown with: <input onChange={changingfilter} />
          <button onClick={filtering}>add</button>
        </div>
      <form onSubmit={addnew}>
        <div>
          name: <input onChange={changing} />
        </div>
        <div>
          Contact: <input onChange={changingcontact} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      {persons.map((value) => <li>{value.name} :  {value.contact}</li>
      )}
      <h2>Filtered</h2>
      {show.map((value) => <li>{value.name} :  {value.contact}</li>
      )} */}

    </div>
    
  )
}

export default App