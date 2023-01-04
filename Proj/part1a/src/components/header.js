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

  // const Header = (props) => {
  //   return (
  //     <>
  //      <h1>{props.course}</h1>
  //      {/* <h1>{props.course}</h1> */}
  //     </>
  //   )
  // }

  // export default Header;