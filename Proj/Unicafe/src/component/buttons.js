import React from 'react'
import { useState } from 'react';

let Good, Bad, Neutral
function Buttons() {
    const [Good, setGood] = useState(0)
    const [Neutral, setNeutral] = useState(0)
    const [Bad, setBad] = useState(0)
    {console.log(Good +" "+ Bad + " " + Neutral)}  
    return (
        <div>
        <button onClick={() => setGood(Good + 1)}>Good</button>
        <button onClick={() => setBad(Bad + 1)}>Bad</button>
        <button onClick={() => setNeutral(Neutral + 1)}>Neutral</button>
    </div>
  )
}

export default Buttons

