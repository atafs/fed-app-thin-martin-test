import React, { Component } from 'react';

import SWPeopleTable from './SWPeopleTable';

import '../styles/index.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1 className="background">Star Wars &hellip;</h1>
                <SWPeopleTable />
            </div>
        )
    }
}

export default App;