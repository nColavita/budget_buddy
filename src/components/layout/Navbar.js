import React from 'react';

const Navbar = (props) => {
    const { brand } = props;
    return (
        <div className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">
                    <i className="fas fa-wallet mr-2"></i>
                    {brand}
                </a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                Home
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
