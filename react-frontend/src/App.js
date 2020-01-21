import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  Nav,
  Jumbotron,
  Card,
  CardDeck,
} from 'react-bootstrap';
import panda from './panda_icon.png';
import cat from './cat.jpg';
import dog from './dog.jpg';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';
import FlashMessage from "./components/FlashMessage";
import LogCollection from "./components/LogCollection"
import AppointmentCollection from "./components/AppointmentCollection"


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      success: "",
      error: "",
      nextFeed: "",
      logs: [],
      // appointments: [],
      deviceId: "PyPi"
    };

    this.feed = this.feed.bind(this);
    
    this.createLog = this.createLog.bind(this);
    this.createAppointment = this.createAppointment.bind(this);
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({nextFeed: "Scheduling your next feed at: " + event.target.value});
    this.componentDidMount();
  }

  handleSubmit(event) {
    this.createAppointment(this.state.nextFeed)
    alert('Your next feed is scheduled at: ' + this.state.nextFeed);
    event.preventDefault();
  }

  createAppointment(timeStamp) {
    let prms = new URLSearchParams({
      device: this.state.deviceId,
      feedTime: timeStamp
    }).toString();

    fetch(
      "/api/appointments/add",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: prms
      }
    );
    console.log("*** Appointment: " + Response);
  }

  createLog(timeStamp) {
    let prms = new URLSearchParams({
      device: this.state.deviceId,
      fedTime: timeStamp
    }).toString();

    if(timeStamp === this.state.nextFeed) {
      this.setState({nextFeed: ""})
      this.componentDidMount();
    };

    fetch(
      "/api/logs/add",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: prms
      }
    );
    console.log(Response);
  }

  feed() {
    fetch("/api/feed/")
    .then(response => response.json())
    .then(stringRes => {
      let JsonData = JSON.parse(stringRes);
      this.setState({
        success: "Most recent feed: " + JsonData.data
      });
      this.componentDidMount();
      this.createLog(JsonData.data);
    })
    .catch(error => {
      this.setState({
        error: "Failed to feed"
      });
    });
  }

  componentDidMount() {
    axios
      .get("/api/logs")
      .then(response => {
        console.log(response)
        let data = response.data.slice(Math.max(response.data.length - 10, 1));
        console.log(data)
        this.setState({
          logs: data
        });
        console.log("***log:" + this.state.logs)
      })
      .catch(error => {
        this.setState({
          error: "There was an error in retrieving feeding logs."
        });
      });

    // axios
    //   .get("/api/appointments")
    //   .then(response => {
    //     console.log(response)
    //     let data = response.data.slice(Math.max(response.data.length - 7, 1));
    //     console.log(data)
    //     this.setState({
    //       appointments: data
    //     });
    //     console.log("***app:" + this.state.appointments)
    //   })
    //   .catch(error => {
    //     this.setState({
    //       error: "There was an error in retrieving feeding appointments."
    //     });
    //   });
  }

  onTimeout = () => {
    this.setState({
      success: undefined,
      error: undefined,
      nextFeed: undefined,
    })
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
                  <Nav.Link>
                    <Link to="/" className="text-light">Home</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/feed" className="text-light">Feed</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/history" className="text-light">History</Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </>

          { this.state.error
            ? <strong>
                <FlashMessage
                  message={this.state.error}
                  style="error"
                  onTimeoutCallback={this.onTimeout}
                />
              </strong>
            : ""
          }

          { this.state.success
            ? <strong>
                <FlashMessage
                  message={this.state.success}
                  style="success"
                  onTimeoutCallback={this.onTimeout}
                />
              </strong>
            : ""
          }

          { this.state.nextFeed
            ? <strong>
                <FlashMessage
                  message={this.state.nextFeed}
                  style="success"
                  onTimeoutCallback={this.onTimeout}
                />
              </strong>
            : ""
          } 

          <Switch>
            <Route exact path="/">
              <div className="moto">
                <Jumbotron fluid>
                  <h5>Welcome to FoodieBear PetFeeder</h5>
                  <h2>
                    Stay connected. Whenever, Wherever
                  </h2>
                </Jumbotron>
              </div>
            </Route>

            <Route path="/feed">
              <CardDeck className="card-deck">
                <Card>
                  <Card.Img variant="top" src={cat} />
                  <Card.Body>
                    <Card.Title>Feed Now</Card.Title>
                    <button 
                      variant="primary"
                      onClick={this.feed}
                    >Submit</button>
                  </Card.Body>
                </Card>

                <Card>
                  <Card.Img variant="top" src={dog} />
                  <Card.Body>
                    <Card.Title>Feed Later</Card.Title>
                      <form onSubmit={this.handleSubmit}>
                        <input type="datetime-local" onChange={this.handleChange}/>
                        <br/>
                        <br/>
                        <input type='submit' value='Submit'/>
                      </form>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Route>

            <Route path="/history">
              
              <div className="text-light">
                <h5>Most Recent Feeding Logs</h5>
                <LogCollection logs={this.state.logs} />
              </div>
            
              {/* <div className="text-light">
                <h5>Scheduled Feeding Logs</h5>
                <AppointmentCollection appointments={this.state.appointments} />
              </div> */}
            </Route>
          </Switch>
        </Router>
      </div>
    );
  } 
}

export default App;