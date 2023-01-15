import { useEffect, useState } from 'react';
import axios from 'axios'
import Display from './components/display';

function App() {
  const [notes, setNotes] = useState([])
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(request => setNotes(request.data))
  }, [])

  const [temp, setTemp] = useState('')
  const [search, setsearch] = useState([])
  const [TempS, setTempS] = useState([])

  let watchsearch = (event) => {
    setTemp(event.target.value)
  }

  const submitquery = (event) => {
    setsearch([])
    setTempS([])
    notes.map((ext) => {
      if (ext.name.common.includes(temp) && !search.includes(ext)) {
        setTempS(search)
        TempS.push(ext)
        setsearch(TempS)
      }
    })
    event.preventDefault()
  }
  console.log("Yeh hai", search)

  // const submitquery = (temp, event) => {
  //   setDisplay(notes.map(ext => ext.name.common === event))
  //   console.log("Yeh hai", display)
  //   temp.preventDefault()
  // }
  console.log("search =", search)
  return (
    <>
      <form onSubmit={submitquery}>
        <div>
          name: <input onChange={watchsearch} />
        </div>
        <div>
          <button type="Submit">add</button>
        </div>
      </form>
      <Display obj = {search}/>
    </>

  );
}

export default App;
