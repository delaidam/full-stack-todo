import React from 'react';
import { Route, Link } from 'react-router-dom';

import NavigationBar from './NavigationBar';
import Todo from './Todo';
import About from './About';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NavigationBar />

        <Route path="/" exact component={Todo}/>
        <Route path="/about" component={About}/>
      </div>
    );
  }
}

export default App;
