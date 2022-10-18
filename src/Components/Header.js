import React from "react";
import { Link } from "react-router-dom";
import './CSS/Header.css';


class Cabecalho extends React.Component {

  render() {
    return (
      <>
        <header id="cabecalho">
          <div id="texto-conteiner">
            <h1 id="header-texto">Boas vindas ao meu portfólio</h1>
            <hr/>
            <h2 id="header-sub">Meu nome é Amanda Karoline</h2>
          </div>
          <nav id="menu">
            <Link to="/Projetos" className="links-nav">Projetos</Link>
            <Link className="links-nav">Contato</Link>
          </nav>
        </header>
      </>
    )
  }
}
export default Cabecalho;