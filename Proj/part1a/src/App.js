// import logo from './logo.svg';
// import './App.css';

import Content from "./components/content";
import Header from "./components/header";
import Total from "./components/total";

const App = () => {
  let course = {
    Course: 'Half Stack application development',
    part1: 'Fundamentals of React',
    exercises1: 10,
    part2: 'Using props to pass data',
    exercises2: 7,
    part3: 'State of a component',
    exercises3: 14,
  }
  return (
    <div>
      <Header course={'Half Stack application development'} />
      <Content part1='Fundamentals of React'
        exercises1={10}
        part2='Using props to pass data'
        exercises2={7}
        part3='State of a component'
        exercises3={14} />
      <Total exercises1={10}
        exercises2={7}
        exercises3={14} />
    </div>
  )
}

export default App;
