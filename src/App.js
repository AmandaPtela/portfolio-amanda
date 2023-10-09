import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './Components/Main';
import Projetos from './Components/Projetos';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Routes>
          <Route path="/" exact element={ <Main /> } />
          <Route path="/projetos" element={ <Projetos /> } />
        </Routes>
      </div>
    );
  }
}

export default App;
