import React, { Component } from 'react';
import { Consumer } from '../context';

class BudgetAnalysis extends Component {
    analysis = (categories) => {
        let total = 0;
        categories.map((category) => {
            total += parseInt(category.categoryBudget);
        });
        return total.toFixed(2);
    };

    render() {
        return (
            <Consumer>
                {(value) => {
                    const { categories } = value;
                    return (
                        <div>
                            <p>
                                Budget Analysis:{' '}
                                <span className="font-weight-bold">
                                    ${this.analysis(categories)}
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
