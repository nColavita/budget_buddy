import React, { Component } from 'react';

import CategoryItem from './CategoryItem';

class CategoryItems extends Component {
    render() {
        return (
            <React.Fragment>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Item</th>
                            <th>Budget</th>
                            <th>Spend</th>
                            <th>Edit/Delete</th>
                        </tr>
                        {this.props.matchedCategory.categoryItems.map(
                            (categoryItem) => (
                                <CategoryItem
                                    key={categoryItem.itemID}
                                    name={categoryItem.itemName}
                                    budget={categoryItem.itemBudget}
                                    spend={categoryItem.itemSpend}
                                />
                            )
                        )}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default CategoryItems;
