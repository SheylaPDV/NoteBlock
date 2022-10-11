// import { Component } from "react";

// class Greting extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       age: 31,
//     };
//   }
//   render() {
//     return (
//       <div>
//         <h1>Sheyla, tu edad es: {this.state.age}</h1>
//         <button onClick={this.brithday}>Cumplir años</button>
//       </div>
//     );
//   }

//   brithday = () => {
//     this.setState((prevState) => ({
//       age: prevState.age - 1,
//     }));
//   };
// }
// export default Greting;
import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const Increment = (props) => {
  //   const [variable, metodo que actualiza la variable] = useState(estado incial)

  const [age, setAge] = useState(31);

  //   Actualizamos el State
  const brithday = () => {
    setAge(age + 1);
  };

  return (
    <div>
      {" "}
      <h1>Sheyla, tu edad es: {age}</h1>
      <button onClick={brithday}>Cumplir años</button>
    </div>
  );
};

Increment.propTypes = {
  age: PropTypes.number,
};

export default Increment;
