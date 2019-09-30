import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Goodbye extends Component {

    state = {};

    componentDidMount() {
        console.log("coming inside react");
        this.hello();
    }

    hello = () => {
        fetch('/goodbye')
            .then(response => response.text())
            .then(message => {
                this.setState({message: message});
            });
    };

    render() {
        return (
            <div className="Goodbye">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">{this.state.message}</h1>
                </header>
            </div>
        );
    }
}

export default Goodbye;
