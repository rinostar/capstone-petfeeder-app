import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  Button,
  Container,
  Nav,
  Jumbotron
} from 'react-bootstrap';
import panda from './panda_icon.png';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';
import FlashMessage from "react-flash-message";
import LogCollection from "./components/LogCollection"
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      success: "",
      error: "",
      logs: [],
      deviceId: "PyPi"
    };

    this.feed = this.feed.bind(this);
  }

  createLog(timeStamp) {
    let prms = new URLSearchParams({
      device: this.state.deviceId,
      fedTime: timeStamp
    }).toString();

    fetch(
      "/api/logs/add",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: prms
        // encodeURIComponent(JSON.stringify({
        //   "device": this.state.deviceId,
        //   "fedTime": timeStamp
        // }))
      }
    );
    console.log(Response);
  }

  feed() {
    fetch("/api/feed/")
    .then(response => response.json())
    .then(JsonData => {
      this.setState({success: JsonData.data.payload.data})
      this.createLog(JsonData.data.payload.data)
    })
    .catch(JsonData => {
      this.setState({error: JsonData.data.payload.data})
    });
  }

  componentDidMount() {
    axios
      .get("/api/logs")
      .then(response => {
        this.setState({
          logs: response.data
        });
      })
      .catch(error => {
        this.setState({
          error: "There was an error in retrieving feeding logs."
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <>
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
              
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link type="button" >
                    <Link to="/" className="text-light">Home</Link>
                  </Nav.Link>

                  <Nav.Link type="button" >
                    <Link to="/feed" className="text-light">Feed</Link>
                  </Nav.Link>

                  <Nav.Link type="button" >
                    <Link to="/history" className="text-light">History</Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </>

          <div className="error">
            <FlashMessage duration={8000} message={this.state.error}>
              <strong>{this.state.error}</strong>
            </FlashMessage>
          </div>

          <div className="success">
            <FlashMessage duration={8000}>
              <strong>{this.state.success}</strong>
            </FlashMessage>
          </div>

          <Switch>
            <Route exact path="/">
              <div>
                <Jumbotron fluid>
                  <h1>FoodieBear PetFeeder</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </Jumbotron>
              </div>
            </Route>

            <Route path="/Feed">
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
            </Route>

            <Route path="/History">
              <div>
                <LogCollection logs={this.state.logs} />
              </div>
            </Route>
          </Switch>
        </Router>
      
        <footer>
          <p className="text-light">@FoodieBear</p>
        </footer>
      </div>
    );
  } 
}

export default App;
