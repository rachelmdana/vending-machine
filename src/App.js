import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';

import VendingMachine from './VendingMachine';
import Snack1 from './Snack1';
import Snack2 from './Snack2';
import Snack3 from './Snack3';

function App() {
  return (
    <Router>
      <div>
        <h1>Vending Machine</h1>
        <nav>
          <NavLink to="/">Vending Machine</NavLink>
          <NavLink to="/snack1">Snack 1</NavLink>
          <NavLink to="/snack2">Snack 2</NavLink>
          <NavLink to="/snack3">Snack 3</NavLink>
        </nav>

        <Route path='/' exact component={VendingMachine} />
        <Route path='/snack1' component={Snack1} />
        <Route path='/snack2' component={Snack2} />
        <Route path='/snack3' component={Snack3} />
      </div>
      </Router>
  );
}

export default App;
