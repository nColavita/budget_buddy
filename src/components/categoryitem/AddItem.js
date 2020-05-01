import React, { Component } from 'react';
import uuid from 'uuid';

class AddItem extends Component {
    state = {
        itemName: '',
        itemBudget: '',
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (dispatch, itemIDCount, categoryID, e) => {
        e.preventDefault();

        const payload = {
            categoryID,
            newItem: {
                itemID: (itemIDCount += 1).toString(),
                itemName: this.state.itemName,
                itemBudget: this.state.itemBudget,
                itemSpend: '0',
            },
        };

        dispatch({ type: 'ADD_ITEM', payload: payload });

        // Clear State
        this.setState({
            itemName: '',
            itemBudget: '',
        });
    };

    render() {
        const { matchedCategory, itemIDCount } = this.props;
        return (
            <div>
                <form
                    onSubmit={this.onSubmit.bind(
                        this,
                        this.props.dispatch,
                        itemIDCount,
                        matchedCategory.categoryID
                    )}
                    className="d-inline-block"
                >
                    <div className="form-group d-inline-block">
                        <input
                            required
                            className="form-control form-control-lg"
                            type="text"
                            placeholder="Item name..."
                            name="itemName"
                            value={this.state.itemName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group d-inline-block ml-3">
                        <input
                            required
                            className="form-control form-control-lg"
                            type="number"
                            placeholder="Item budget..."
                            name="itemBudget"
                            value={this.state.itemBudget}
                            onChange={this.onChange}
                        />
                    </div>
                    <input
                        type="submit"
                        value="Add Item"
                        className="btn btn-primary ml-3"
                    />
                </form>
            </div>
        );
    }
}

export default AddItem;
