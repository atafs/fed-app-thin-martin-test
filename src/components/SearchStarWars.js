import React, { Component } from 'react';

class SearchStarWars extends Component {
    render() {
        var products = [
            {
                id: 1,
                name: "Item name 1",
                price: 100
            },{
                id: 2,
                name: "Item name 2",
                price: 100
            }
        ]
        
        return (
            <table>
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Points</th>
                    </tr>
                    {
                        products.map( (product, index) => {
                            console.log('product', product);
                            return (
                                <tr key={index} >
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}

export default SearchStarWars;