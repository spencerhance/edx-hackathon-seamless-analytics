import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './App.scss';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Footer />
    </div>
  );
}
