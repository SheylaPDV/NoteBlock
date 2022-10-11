import { Component } from "react";

class Greting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 31,
    };
  }
  render() {
    return (
      <div>
        <h1>Sheyla, tu edad es: {this.state.age}</h1>
        <button onClick={this.brithday}>Cumplir años</button>
      </div>
    );
  }

  brithday = () => {
    this.setState((prevState) => ({
      age: prevState.age - 1,
    }));
  };
}
export default Greting;
