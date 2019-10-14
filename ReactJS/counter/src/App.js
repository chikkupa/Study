import React, {Fragment} from 'react';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      counter: 0
    }
  }

  counter(value) {
    this.setState({
      counter: this.state.counter + value
    })
  }
  
  render(){
    const {counter} = this.state;
    const buttonMargins = {margin: 'auto 10px'};
    return (
      <Fragment>
        <h3>Counter: {counter} </h3>
        <div>
          <button
           style={buttonMargins}
           onClick={() => this.counter(1)}
           >Increment</button>
          <button 
            style={buttonMargins}
            onClick={() => this.counter(-1)}
            >Decrement</button>
          <button 
            style={buttonMargins}
            onClick={() => this.counter(-counter)}
            >Reset</button>
        </div>
      </Fragment>
    );
  }
}


export default App;
