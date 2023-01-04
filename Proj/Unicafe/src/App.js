// import logo from './logo.svg';
// import './App.css';
// import Header from './component/header';
// import Buttons from './component/buttons';
// import Count from './component/count';

// function App() {
//   return (
//     <>
//     {/* here we tried to refactor almost every part like the header, buttons etc into diff components
//     but it turns out we cannot export the updated values we get from useState hook from buttons
//     to count module, PERIOD */}
//     {/* hence we sticking to single file approach for now */}
//       {/* //+ Bad + " " + Neutral)} */}
//       <Header />
//       <Buttons/>
//       <Count />
//     </>
//   );
// }

import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = props => <h1>{props.name}</h1>

const Statistic = ({text, value}) => {
  if (text === "positive") {
    return (
      <tr><td>{text} {value} %</td></tr>
    )
  }
  
  return (
    <tr><td>{text} {value}</td></tr>
    )
  }
  
  const Statistics = ({clicks}) => {
    const total = clicks.good + clicks.neutral + clicks.bad
    const average = (clicks.good * 1 + clicks.bad * -1) / total
    const positive = clicks.good * (100/total)
    
    if (total === 0) {
      return (
        <div>
          No feedback given
        </div>
      )
    }
    
    return (
      <div>
        <table>
          <tbody>
            <Statistic text="good" value={clicks.good} />
            <Statistic text="neutral" value={clicks.neutral} />
            <Statistic text="bad" value={clicks.bad} />
            <Statistic text="all" value={total} />
            <Statistic text="average" value={average} />
            <Statistic text="positive" value={positive} />
          </tbody>
        </table>
      </div>
    )
  }
  

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to own state
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })
  
  const handleGoodClick = () =>
  setClicks({...clicks, good: clicks.good + 1})
  
  const handleNeutralClick = () =>
  setClicks({...clicks, neutral: clicks.neutral + 1})
  
  const handleBadClick = () =>
  setClicks({...clicks, bad: clicks.bad + 1})
  
  
  return (
    <div>
      <Header name="Customer feedback" />
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Header name="Statistics" />
      <Statistics clicks={clicks} />
    </div>
  )
}
export default App;

// ReactDOM.render(<App />,
//   document.getElementById('root')
// )