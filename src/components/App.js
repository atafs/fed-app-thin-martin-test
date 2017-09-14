import React, { Component } from 'react';

import SWPeopleTable from './SWPeopleTable';
import SWPersonList from './SWPersonList';

import '../styles/index.css';

class App extends Component {
    render() {
        return (
            <div>
                <h4 className="background">Star Wars &hellip;</h4>
                <div className="container">
                    <SWPeopleTable className="content" />
                    <SWPersonList className="content" />
                </div>
            </div>
        )
    }
}

export default App;