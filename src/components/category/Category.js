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
                            <div className="row">
                                <div className="col-md-6">
                                    <h4>{categoryName}</h4>
                                </div>
                                <div className="col-md-3">
                                    <p>
                                        Budget: $
                                        {parseFloat(categoryBudget).toFixed(2)}
                                    </p>
                                    <p>
                                        Spend: $
                                        {parseFloat(categorySpend).toFixed(2)}
                                    </p>
                                </div>
                                <div className="col-md-3">
                                    <Link
                                        to={`category/view/${categoryID}`}
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

export default Category;
