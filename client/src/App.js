import React, { Component } from 'react';
import './App.css';
import ClubsContainer from './components/ClubsContainer';

class App extends Component {
    render() {
        return (
            <div className="App">
            <header className="App-header">
            <h1 className="App-title">Hello Hiplyst!</h1>
        </header>
        <ClubsContainer />
        </div>
    );
    }
}

export default App;
