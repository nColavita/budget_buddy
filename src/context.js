import React, { Component } from 'react';
// import uuid from 'uuid';

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
        case 'ADD_ITEM':
            return {
                ...state,
                // categories: [action.payload.newItem, ...state.categories.categoryItems],
                categories: state.categories.map((category) => {
                    if (category.categoryID === action.payload.categoryID) {
                        return {
                            ...category,
                            categoryItems: category.categoryItems.concat(
                                action.payload.newItem
                            ),
                        };
                    } else {
                        return category;
                    }
                }),
            };
        default:
            return state;
    }
};

export class Provider extends Component {
    state = {
        idCount: 2,
        itemIDCount: 4,
        categories: [
            {
                categoryID: '1',
                categoryName: 'Home',
                categoryBudget: '0',
                categorySpend: '0',
                categoryItems: [
                    {
                        itemID: '1',
                        itemName: 'Electric',
                        itemBudget: '75',
                        itemSpend: '50',
                    },
                    {
                        itemID: '2',
                        itemName: 'Gas',
                        itemBudget: '50',
                        itemSpend: '0',
                    },
                ],
            },
            {
                categoryID: '2',
                categoryName: 'Entertainment',
                categoryBudget: '0',
                categorySpend: '0',
                categoryItems: [
                    {
                        itemID: '3',
                        itemName: 'Dining',
                        itemBudget: '250',
                        itemSpend: '175',
                    },
                    {
                        itemID: '4',
                        itemName: 'Movies',
                        itemBudget: '250',
                        itemSpend: '300',
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
