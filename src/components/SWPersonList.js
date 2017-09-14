import React, { Component } from 'react';

class SWPersonList extends Component {
    render() {
        console.log('SWPersonList', this.props)

        return (
            <table>
                <tbody>
                    <tr>
                        <th>Person Details</th>
                        <th />
                    </tr>
                        <tr>
                            <td className="td-no-border">asda ssad asd asd adasd asd 
                            asda ssad asd asd adasd asd 
                            asda ssad asd asd adasd asd 
                            asda ssad asd asd adasd asd 
                            asda ssad asd asd adasd asd 
                            asda ssad asd asd adasd asd 
                            asda ssad asd asd adasd asd 
                            asda ssad asd asd adasd asd 
                            v
                            v
                            v
                            v
                            v
                            v

                            asda ssad asd asd adasd asd 
                            </td>
                            <td className="arrow td-no-border">
                                &#9733;
                            </td>
                        </tr>
                </tbody>
            </table>
        )
    }
}

export default SWPersonList;