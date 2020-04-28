import React, { Component } from 'react';
import uuid from 'uuid';

import Category from './Category';

class Categories extends Component {
    state = {
        categories: [
            {
                categoryID: uuid(),
                categoryName: 'Bills',
                categoryBudget: '5000',
                categorySpend: '0',
                categoryItems: [
                    {
                        itemID: uuid(),
                        itemName: 'Electric',
                        itemBudget: '75',
                        itemSpend: '0',
                    },
                    {
                        itemID: uuid(),
                        itemName: 'Gas',
                        itemBudget: '50',
                        itemSpend: '0',
                    },
                ],
            },
            {
                categoryID: uuid(),
                categoryName: 'Entertainment',
                categoryBudget: '500',
                categorySpend: '0',
                categoryItems: [
                    {
                        itemID: uuid(),
                        itemName: 'Dining',
                        itemBudget: '250',
                        itemSpend: '0',
                    },
                    {
                        itemID: uuid(),
                        itemName: 'Movies',
                        itemBudget: '250',
                        itemSpend: '0',
                    },
                ],
            },
        ],
    };

    render() {
        const { categories } = this.state;
        return (
            <React.Fragment>
                {categories.map((category) => (
                    <Category key={category.categoryID} category={category} />
                ))}
            </React.Fragment>
        );
    }
}

export default Categories;