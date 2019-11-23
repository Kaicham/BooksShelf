import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import MainApp from './pages/MainApp/MainApp'

import './App.css'

const App = () => {

  return (
    <div>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/bookshelf" component={MainApp} />
      </Router>
    </div>
  )
}

function Home() {
  return <h2>Home</h2>;
}


export default App;
