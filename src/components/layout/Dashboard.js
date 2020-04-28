import React from 'react';

import BudgetAnalysis from '../BudgetAnalysis';
import AddCategory from '../category/AddCategory';
import Categories from '../category/Categories';

const Dashboard = () => {
    return (
        <div>
            <div className="container">
                <BudgetAnalysis />
            </div>
            <Categories />
            <AddCategory />
        </div>
    );
};

export default Dashboard;
