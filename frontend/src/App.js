import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

const Application = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hello">Hello</Link>
        </li>
        <li>
          <Link to="/goodbye">Goodbye</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/hello" component={App} />
      <Route path="/goodbye" component={Goodbye} />
    </div>
  </Router>
);

const Home = () => <h3>Home</h3>
const Hello1 = () => <h3>Hello</h3>;
const Goodbye1 = () => <h3>Goodbye</h3>;

class App extends Component {

    state = {};

    constructor() {
        this.state = "home";
    }

    componentDidMount() {
        setInterval(this.hello, 250);
    }

    Hello1 = () => {
        fetch('/hello')
            .then(response => response.text())
            .then(message => {
                this.setState({message: message});
            });
    };


    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                      <ul>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/hello">Hello</Link>
                        </li>

                      </ul>

                      <hr />

                      <Route exact path="/home" component={Home} />
                      <Route path="/hello" component={App} />
                      <Route path="/goodbye" component={Goodbye} />
                    </div>
                  </Router>
            </div>
        );
    }
}

class Goodbye extends Component {

    state = {};

    constructor() {
        this.state = "home";
    }

    componentDidMount() {
        setInterval(this.Goodbye, 250);
    }

    Goodbye = () => {
          fetch('/goodbye')
              .then(response => response.text())
              .then(message => {
                  this.setState({message: message});
              });
      };
    render() {
        return (
            <div className="Goodbye">
                <Router>
                    <div>
                      <ul>

                        <li>
                          <Link to="/goodbye">Goodbye</Link>
                        </li>
                      </ul>

                      <hr />

                      <Route exact path="/home" component={Home} />
                      <Route path="/hello" component={App} />
                      <Route path="/goodbye" component={Goodbye} />
                    </div>
                  </Router>
            </div>
        );
    }
}

export default Application;
