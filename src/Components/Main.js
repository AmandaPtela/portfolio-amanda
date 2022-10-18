import React from 'react';
import { Link } from "react-router-dom";
import Header from './Header';
import Content from './Content';
import './CSS/Main.css';

class Main extends React.Component {
  render() {
    return (
      <div id="all">
        <nav id="menu">
          <Link to="/Projetos" className="links-nav">Projetos</Link>
          <Link className="links-nav">Contato</Link>
        </nav>
        <div className="app">
          <Header />
          <Content />
        </div>
      </div>
    );
  }
}

export default Main;