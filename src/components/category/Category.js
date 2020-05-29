import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';

class Category extends Component {
    onDeleteCategoryClick = (categoryID, dispatch) => {
        dispatch({ type: 'DELETE_CATEGORY', payload: categoryID });
    };

    onViewClick = (categoryID, e) => {
        console.log(categoryID);
    };

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
        const {
            categoryID,
            categoryName,
            categoryBudget,
            categorySpend,
        } = this.props.category;
        return (
            <Consumer>
                {(value) => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                            <div className="row d-flex align-items-center">
                                <div className="col-md-6">
                                    <h4>{categoryName}</h4>
                                </div>
                                <div className="col-md-3 d-flex align-items-center justify-content-left">
                                    <div className="mr-3">
                                        <p style={style.pstyle}>
                                            Budget: $
                                            {this.itemAnalysis(
                                                this.props.category
                                                    .categoryItems,
                                                'budget'
                                            )}
                                        </p>
                                    </div>
                                    <div className="mr-3">
                                        <p style={style.pstyle}>
                                            Spend: $
                                            {this.itemAnalysis(
                                                this.props.category
                                                    .categoryItems,
                                                'spend'
                                            )}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <Link
                                        to={`category/${categoryID}`}
                                        className="btn btn-info btn-sm mr-3"
                                    >
                                        View
                                    </Link>
                                    <button
                                        onClick={this.onDeleteCategoryClick.bind(
                                            this,
                                            categoryID,
                                            dispatch
                                        )}
                                        className="btn btn-danger btn-sm"
                                    >
                                        {' '}
                                        Delete{' '}
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

const style = {
    pstyle: {
        margin: '0',
        fontSize: '0.85em',
    },
};

export default Category;
