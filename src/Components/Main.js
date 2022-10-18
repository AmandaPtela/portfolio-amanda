import React from 'react';
import Header from './Header';
import Content from './Content';
import './CSS/Main.css';

class Main extends React.Component {
  render() {
    return (
      <div id="all">
        <div className="app">
          <Header />
          <Content />
        </div>
      </div>
    );
  }
}

export default Main;