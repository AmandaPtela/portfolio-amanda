import React from 'react';
import Header from './Header';
import Content from './Content';
import '../CSS/Main.css';
import SobreMim from './SobreMim';

class Main extends React.Component {
  render() {
    return (
      <div id="all">
        <div id="app">
          <Header />
        </div>
        <div id="conteudo">
          <SobreMim />
          <Content />
        </div>
      </div>
    );
  }
}

export default Main;