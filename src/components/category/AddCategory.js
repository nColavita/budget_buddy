import React, { Component } from 'react';
import { Consumer } from '../../context';

import uuid from 'uuid';

class AddCategory extends Component {
    state = {
        categoryName: '',
        categoryBudget: '',
        categoryItems: [],
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (dispatch, idCount, e) => {
        e.preventDefault();

        const { categoryName, categoryBudget } = this.state;

        // Build new category object
        const newCategory = {
            categoryID: (idCount += 1).toString(),
            categoryName: categoryName,
            categoryBudget: categoryBudget,
            categorySpend: 0,
            categoryItems: [],
        };

        dispatch({ type: 'ADD_CATEGORY', payload: newCategory });

        // Clear State
        this.setState({
            categoryName: '',
            categoryBudget: '',
            categoryItems: [],
        });

        // Redirects after successful submission
        this.props.history.push('/');
    };

    render() {
        const { categoryName, categoryBudget } = this.state;
        return (
            <Consumer>
                {(value) => {
                    const { dispatch, idCount } = value;

                    return (
                        <React.Fragment>
                            <div className="card mb-3">
                                <h2 className="card-header">
                                    Create a Category
                                </h2>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8">
                                            <form
                                                onSubmit={this.onSubmit.bind(
                                                    this,
                                                    dispatch,
                                                    idCount
                                                )}
                                            >
                                                <div className="form-group">
                                                    <input
                                                        required
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
                                                        required
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
                }}
            </Consumer>
        );
    }
}

export default AddCategory;
