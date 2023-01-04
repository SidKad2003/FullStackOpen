const Header = (course) => {
    return (
      <>
       <h1>{course.course}</h1>
       {/* <h1>{props.course}</h1> */}
      </>
    )
  }

  export default Header;

// the following works too, if we pass any obejct as props, the system will work just fine,
//thats the way it is IG.
//see: https://fullstackopen.com/en/part1/component_state_event_handlers#passing-state-to-child-components  

//the following syntax by default sets the value of props.course to the passed value in App.js

  // const Header = (props) => {
  //   return (
  //     <>
  //      <h1>{props.course}</h1>
  //      {/* <h1>{props.course}</h1> */}
  //     </>
  //   )
  // }

  // export default Header;