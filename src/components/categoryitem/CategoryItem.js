import React, { Component } from 'react';

class CategoryItem extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>${this.props.budget}</td>
                <td>${this.props.spend}</td>
                <td>
                    <i
                        className="fas fa-edit"
                        style={{ cursor: 'pointer', marginRight: '10px' }}
                    ></i>
                    <i
                        className="fas fa-minus-circle"
                        style={{ cursor: 'pointer', color: 'red' }}
                    ></i>
                </td>
            </tr>
        );
    }
}

export default CategoryItem;
