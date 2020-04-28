import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/layout/Dashboard';
import About from './components/pages/About';
import AddCategory from './components/category/AddCategory';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar brand="Budgetbuddy" />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Dashboard}></Route>
                        <Route exact path="/about" component={About}></Route>
                        <Route
                            exact
                            path="/category/add"
                            component={AddCategory}
                        ></Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
