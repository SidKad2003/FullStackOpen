import './App.css';
import { useState } from 'react';


const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', contact: 65654446 }
  ])
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
      <h2>Phonebook</h2>
      <h3>Filter</h3>
        <div>
          Filter shown with: <input onChange={changingfilter} />
          <button onClick={filtering}>add</button>
        </div>
      <h2>Add a New</h2>
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
      <h2>Numbers</h2>
      {persons.map((value) => <li>{value.name} :  {value.contact}</li>
      )}
      <h2>Filtered</h2>
      {show.map((value) => <li>{value.name} :  {value.contact}</li>
      )}
    </div>
    
  )
}

export default App