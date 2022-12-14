import React from 'react';
import Header from './Header';
import Projetos from './Projetos';
import './CSS/Main.css';
import SobreMim from './SobreMim';
import Habilidades from './Habilidades';

class Main extends React.Component {
  render() {
    return (
      <div id="all">
        <div id="app">
          <Header />
        </div>
        <div id="conteudo">
          <SobreMim />
          <Habilidades />
          <Projetos />
        </div>
      </div>
    );
  }
}

export default Main;