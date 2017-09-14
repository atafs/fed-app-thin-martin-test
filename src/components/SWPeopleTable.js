import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectSWPerson } from '../actions';
import { bindActionCreators } from 'redux';

class SWPeopleTable extends Component {
    render() {
        console.log('swPeopleTable props', this.props)
        
        return (
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Height</th>
                        <th>Skin Color</th>
                        <th>Gender</th>
                        <th />
                    </tr>
                    {
                        this.props.swpeople.map( (person, index) => {
                            return (
                                <tr key={index} >
                                    <td>{person.name}</td>
                                    <td>{person.height}</td>
                                    <td>{person.skin_color}</td>
                                    <td>{person.gender}</td>
                                    <td className="arrow" onClick={() => this.props.selectSWPerson(person)}>
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectSWPerson }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SWPeopleTable);