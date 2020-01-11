import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  Button,
  Container
} from 'react-bootstrap';
import panda from './panda_icon.png';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      success: 'default-success-message',
      error: 'default-error-message'
    };

    this.feed = this.feed.bind(this);
  }

  feed() {
    fetch("/api/feed/")
    .then(response => response.json())
    .then(JsonData => {
      console.log(JsonData);
      this.setState({success: JsonData.data.payload.data})
      console.log(this.state.success)
    })
    .catch(JsonData => {
      console.log(JsonData);
      this.setState({error: JsonData.data.payload.data})
      console.log(this.state.error)
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark">
          <Navbar.Brand href="/" className="text-light">
            <img 
              src={panda}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="FoodieBear Logo"
            />
            &nbsp; FoodieBear PetFeeder
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        </Navbar>

        <Container className="container-full">
          <Button 
            variant="primary"
            onClick={this.feed}
          >Feed Now</Button>
          <br/>
          <session className="text-light">
            <p> {this.state.success} </p>
            <p> {this.state.error} </p>
          </session>
        </Container>
   
        <footer>
          <p className="text-light">@FoodieBear</p>
        </footer>
      </div>
    );
  } 
}

export default App;
