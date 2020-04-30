import React, { Component } from 'react';
import { Consumer } from '../../context';

import CategoryItems from '../categoryitem/CategoryItems';

class ViewCategory extends Component {
    render() {
        let categoryParam = this.props.match.params.categoryID;
        return (
            <Consumer>
                {(value) => {
                    const { categories } = value;
                    let matchedCategory = categories.find(
                        (category) => category.categoryID === categoryParam
                    );

                    return (
                        <React.Fragment>
                            {console.log(matchedCategory)}
                            <div className="row d-flex align-items-center justify-content-md-between">
                                <div className="col-md-8">
                                    <h1>{matchedCategory.categoryName}</h1>
                                </div>
                                <div className="col-md-4 d-flex align-items-center justify-content-end">
                                    <h6 className="mr-3">
                                        Budget: $
                                        {parseInt(
                                            matchedCategory.categoryBudget
                                        ).toFixed(2)}
                                    </h6>
                                    <h6>
                                        Spend: $
                                        {parseInt(
                                            matchedCategory.categorySpend
                                        ).toFixed(2)}
                                    </h6>
                                </div>
                            </div>
                            <div className="row">
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
