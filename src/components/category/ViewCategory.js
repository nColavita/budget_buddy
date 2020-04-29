import React, { Component } from 'react';

class ViewCategory extends Component {
    render() {
        return <div>{this.props.match.params.categoryID}</div>;
    }
}

export default ViewCategory;
