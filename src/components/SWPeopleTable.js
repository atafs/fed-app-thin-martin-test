import React, { Component } from 'react';
import { connect } from 'react-redux';

class SWPeopleTable extends Component {
    openPeople() {
        console.log('openPeople');
    }
    render() {
        console.log('props', this.props)
        
        return (
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Height</th>
                        <th>Skin Color</th>
                        <th>Gender</th>
                        <th>Actions</th>
                    </tr>
                    {
                        this.props.swpeople.map( (people, index) => {
                            return (
                                <tr key={index} >
                                    <td>{people.name}</td>
                                    <td>{people.height}</td>
                                    <td>{people.skin_color}</td>
                                    <td>{people.gender}</td>
                                    <td className="arrow" onClick={this.openPeople}>
                                        &#10148;
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null)(SWPeopleTable);