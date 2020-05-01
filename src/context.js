import React, { Component } from 'react';
import uuid from 'uuid';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CATEGORY':
            return {
                ...state,
                categories: state.categories.filter(
                    (category) => category.categoryID !== action.payload
                ),
            };
        case 'ADD_CATEGORY':
            return {
                ...state,
                categories: [action.payload, ...state.categories],
            };
        case 'DELETE_ITEM':
            return {
                ...state,
                categories: state.categories.categoryItems.filter(
                    (item) => item.itemID !== action.payload
                ),
            };
        case 'ADD_ITEM':
            return {
                ...state,
                categories: [action.payload, ...state.categories.categoryItems],
            };
        default:
            return state;
    }
};

export class Provider extends Component {
    state = {
        categories: [
            {
                categoryID: uuid(),
                categoryName: 'Home',
                categoryBudget: '1500',
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

        dispatch: (action) => this.setState((state) => reducer(state, action)),
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
