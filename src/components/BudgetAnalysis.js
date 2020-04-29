import React, { Component } from 'react';
import { Consumer } from '../context';

class BudgetAnalysis extends Component {
    render() {
        return (
            <Consumer>
                {(value) => {
                    const { categories } = value;
                    let total = 0;
                    categories.map((category) => {
                        total += parseInt(category.categoryBudget);
                    });
                    return (
                        <div>
                            <p>
                                Budget Analysis: $
                                <span className="font-weight-bold">
                                    {total.toFixed(2)}
                                </span>
                            </p>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default BudgetAnalysis;
