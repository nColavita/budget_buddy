import React from 'react';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/layout/Dashboard';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar brand="Budgetbuddy" />
            <div className="container">
                <Dashboard />
            </div>
        </div>
    );
}

export default App;
