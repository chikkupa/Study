import React from 'react';
import {Card, Button, CardTitle, CardText, Row, Col} from 'reactstrap';
import ListComponent from "./Components/ListComponent";

class App extends React.Component {
  state = {
    list: [],
    title: '',
    notes: '',
  };

  handleChange = e => {
    const {name, value} = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleAdd = e => {
    this.setState(previousState => ({
      list: previousState.list.concat({
        title: this.state.title,
        notes: this.state.notes,
      }),
    }));

    this.setState(previousState => ({
      title: '',
      notes: '',
    }));
  };

  renderItem = () => {
    const {list} = this.state;

    // console.log(list)
    return list.map(item => {
      return (
        <Row key={item.title}>
          <Col sm="6">{item.title}</Col>
          <Col sm="6">{item.notes}</Col>
        </Row>
      );
    });
  };
  render() {
    const {title, notes} = this.state;
    return (
      <div className="App">
        <header className="App-header">Notes App</header>
        <Row>
          <Col sm="6">
            <Card body>
              <Row>
                <Col sm="6">Title</Col>
                <Col sm="6">Notes</Col>
              </Row>
              {this.renderItem()}
            </Card>
          </Col>
          <Col sm="6">
            <Card body>
              <Row>
                <Col sm="6">
                  <label>Title</label>
                </Col>
                <Col sm="6">
                  <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={this.handleChange}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm="6">
                  <label>Notes</label>
                </Col>
                <Col sm="6">
                  <textarea name="notes" onChange={this.handleChange} value={notes} />
                </Col>
              </Row>
              <Row>
                <button onClick={() => this.handleAdd()}>Add</button>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default App;
