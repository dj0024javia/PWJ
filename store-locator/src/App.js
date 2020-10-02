import React from 'react';
import './App.css';


import Home from './Home';
import PaymentPage from './PaymentPage';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>


          <Route path="/payment">
            <PaymentPage />
          </Route>

          <Route path='/'>
            <Home />
          </Route>


        </Switch>



      </div>
    </Router>
  );
}

export default App;
