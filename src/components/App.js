import React, { Component } from 'react';

import SearchStarWars from './SearchStarWars';

import '../styles/index.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1 className="background">Thin Martian</h1>
                <SearchStarWars />
            </div>
        )
    }
}

export default App;