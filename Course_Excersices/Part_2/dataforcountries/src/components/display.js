import React from 'react'
import axios from 'axios'

function Display({ obj }) {
    return(obj.map((object) => <>
        
        <ul>
            <h1>{object.name.common}</h1>
        </ul>
        <ul>
            {object.capital}
        </ul>
        <ul>
            <h1>Language</h1>
        </ul>
        <ul>
        <li>{Object.values(object.languages).map((jsx)=><li>{jsx}</li>)}</li><br/>
        {/* <li>{(Array.from(object.languages)).map((jsx)=>console.log("jsx is", jsx))}</li> */}
        </ul>
        <ul>
            <img src={object.flags.png} alt="None" />
        </ul>
    </>))
}

export default Display