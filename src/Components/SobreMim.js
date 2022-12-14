import React from "react";
import { Link } from "react-router-dom";
import foto from '../Images/profile-img.jpg';
import './CSS/SobreMim.css';

class SobreMim extends React.Component {
  render() {
    return (
    <>
      <section className="sobre">
        <div id="sobre">
          <div id="space-photo">
            <img id="foto" alt="foto-perfil" src={foto}/>
          </div>
          <div className="texto-sobre">
            <p id="sobre-text">
            Desenvolvedora Front-End. <br />
            Adoro <strong>música, gatos, basquete</strong> e <strong>documentários aleatórios</strong>; <br/>
            e jogos como <strong>Don't Starve Together</strong>, <strong>Wild Rift</strong>, <strong>Card/Board Games</strong> entre outros!
            </p>
          </div>
        </div>
          <nav id="menu">
            <a href="https://www.linkedin.com/in/amandaptela/" target="_blank" className="links-nav">Linkedin</a>
            <a href="#Projetos" className="links-nav">Projetos</a>
            <Link className="links-nav">Fale comigo</Link>
          </nav>
      </section>
    </>
    )
  }
}
export default SobreMim;
