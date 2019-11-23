import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            string: 'Conrad'
        };
    }
    render() {
        return (
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className='App-link'
                        href='https://www.conrad-parker.com'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <p>Hey {this.state.string}! Check out my website!</p>
                    </a>
                    <div>
                        <button
                            onClick={() => this.setState({ string: 'Alex' })}
                        >
                            Alex?
                        </button>
                        |
                        <button
                            onClick={() => this.setState({ string: 'Alex' })}
                        >
                            Umayr?
                        </button>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
