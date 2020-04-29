import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Category extends Component {
    onDeleteClick = () => {
        this.props.deleteClickHandler();
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
            <div className="card card-body mb-3">
                <div className="row">
                    <div className="col-md-6">
                        <h4>{categoryName}</h4>
                    </div>
                    <div className="col-md-3">
                        <p>Budget: ${parseFloat(categoryBudget).toFixed(2)}</p>
                        <p>Spend: ${parseFloat(categorySpend).toFixed(2)}</p>
                    </div>
                    <div className="col-md-3">
                        <Link
                            to={`category/view/${categoryID}`}
                            className="btn btn-info btn-sm mr-3"
                        >
                            View
                        </Link>
                        <button
                            onClick={this.onDeleteClick}
                            className="btn btn-danger btn-sm"
                        >
                            {' '}
                            Delete{' '}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Category;
