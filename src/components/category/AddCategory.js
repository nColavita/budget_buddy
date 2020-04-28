import React, { Component } from 'react';
import uuid from 'uuid';

class AddCategory extends Component {
    state = {
        categoryName: '',
        categoryBudget: '',
        categoryItems: [],
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();

        const { categoryName, categoryBudget } = this.state;

        const newCategory = {
            id: uuid(),
            categoryName,
            categoryBudget,
            categorySpend: 0,
            categoryItems: [],
        };

        // Clear State
        this.setState({
            categoryName: '',
            categoryBudget: '',
            categoryItems: [],
        });
    };

    render() {
        const { categoryName, categoryBudget, categoryItems } = this.state;
        return (
            <React.Fragment>
                <div className="card mb-3">
                    <h2 className="card-header">Create a Category</h2>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="categoryName">
                                            Category Name
                                        </label>
                                        <input
                                            className="form-control form-control-lg"
                                            type="text"
                                            name="categoryName"
                                            placeholder="Entertainment, Traveling, Pets, Home..."
                                            value={categoryName}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="categoryName">
                                            {categoryName} Budget
                                        </label>
                                        <input
                                            className="form-control form-control-lg"
                                            type="number"
                                            name="categoryBudget"
                                            placeholder="$..."
                                            value={categoryBudget}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <input
                                        type="submit"
                                        className="btn btn-dark btn-block"
                                    />
                                </form>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default AddCategory;