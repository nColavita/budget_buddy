import React from 'react';
import { Link } from 'react-router-dom';

import BudgetAnalysis from '../BudgetAnalysis';

const DashHeader = () => {
    return (
        <div className="row mb-4">
            <div className="col-md-8">
                <Link to="/category/add" className="btn btn-info rounded-pill">
                    <i className="fas fa-plus"></i> Category
                </Link>
            </div>
            <div className="col-md-4">
                <BudgetAnalysis />
            </div>
        </div>
    );
};

export default DashHeader;
