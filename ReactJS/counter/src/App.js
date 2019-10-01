import React, {Fragment} from 'react';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      counter: 0
    }
  }
  
  render(){
    const {counter} = this.state;
    const buttonMargins = {margin: 'auto 10px'};
    return (
      <Fragment>
        <h3>Counter: {counter} </h3>
        <div>
          <button style={buttonMargins}>Increment</button>
          <button style={buttonMargins}>Decrement</button>
          <button style={buttonMargins}>Reset</button>
        </div>
      </Fragment>
    );
  }
}


export default App;
