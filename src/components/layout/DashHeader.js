import React from 'react';
import { Link } from 'react-router-dom';

import BudgetAnalysis from '../BudgetAnalysis';

const DashHeader = () => {
    return (
        <div>
            <Link to="/category/add">
                Add Category <i className="fas fa-plus"></i>
            </Link>
            <BudgetAnalysis />
        </div>
    );
};

export default DashHeader;
