import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage';

import './App.css';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}
