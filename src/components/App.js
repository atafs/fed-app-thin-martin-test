import React, { Component } from 'react';

import SWPeopleTable from './SWPeopleTable';

import '../styles/index.css';

class App extends Component {
    render() {
        return (
            <div>
                <h4 className="background">Star Wars &hellip;</h4>
                <SWPeopleTable />
            </div>
        )
    }
}

export default App;