import React, { Component } from 'react';

class Category extends Component {
    onDeleteClick = () => {
        this.props.deleteClickHandler();
    };

    render() {
        const {
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
                        <button className="btn btn-success btn-sm mr-3">
                            View
                        </button>
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
