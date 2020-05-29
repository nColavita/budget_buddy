import React, { Component } from 'react';
import { Consumer } from '../../context';

import CategoryItems from '../categoryitem/CategoryItems';
import AddItem from '../categoryitem/AddItem';

class ViewCategory extends Component {
    itemAnalysis = (items, type) => {
        let total = 0;

        items.map((item) => {
            if (type === 'budget') {
                total += parseInt(item.itemBudget);
            }
            if (type === 'spend') {
                total += parseInt(item.itemSpend);
            }
        });
        return total.toFixed(2);
    };

    render() {
        const { match, history } = this.props;
        return (
            <Consumer>
                {(value) => {
                    const { categories, dispatch, itemIDCount } = value;

                    const categoryParam = match.params.categoryID;
                    const matchedCategory = categories.find(
                        (category) => category.categoryID === categoryParam
                    );
                    return (
                        <React.Fragment>
                            <div className="row d-flex align-items-center justify-content-md-between">
                                <div className="col-md-8">
                                    <h1>{matchedCategory.categoryName}</h1>
                                </div>
                                <div className="col-md-4 d-flex align-items-center justify-content-end">
                                    <h6 className="mr-3">
                                        Budget: $
                                        {this.itemAnalysis(
                                            matchedCategory.categoryItems,
                                            'budget'
                                        )}
                                    </h6>
                                    <h6>
                                        Spend: $
                                        {this.itemAnalysis(
                                            matchedCategory.categoryItems,
                                            'spend'
                                        )}
                                    </h6>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <AddItem
                                    matchedCategory={matchedCategory}
                                    dispatch={dispatch}
                                    itemIDCount={itemIDCount}
                                    history={history}
                                />
                            </div>
                            <div className="row mt-3">
                                <CategoryItems
                                    matchedCategory={matchedCategory}
                                />
                            </div>
                        </React.Fragment>
                    );
                }}
            </Consumer>
        );
    }
}

export default ViewCategory;
