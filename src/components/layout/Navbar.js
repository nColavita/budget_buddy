import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const { brand } = props;
    return (
        <div className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <i className="fas fa-wallet mr-2"></i>
                    {brand}
                </Link>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <i className="fas fa-chart-bar"></i> Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                <i className="fas fa-question"></i> About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
