import React, { Component } from 'react';
import { Consumer } from '../../context.js';

import Category from './Category';

class Categories extends Component {
    render() {
        return (
            <Consumer>
                {(value) => {
                    const { categories } = value;

                    return (
                        <React.Fragment>
                            {categories.map((category) => (
                                <Category
                                    key={category.categoryID}
                                    category={category}
                                />
                            ))}
                        </React.Fragment>
                    );
                }}
            </Consumer>
        );
    }
}

export default Categories;
