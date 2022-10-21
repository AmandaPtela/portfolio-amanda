import React from "react";
import { Link } from "react-router-dom";
import foto from '../Images/profile-img.jpg';
import './CSS/SobreMim.css';

class SobreMim extends React.Component {
  render() {
    return (
    <>
      <section id="sobre">
        <div id="space-photo">
          <img id="foto" alt="foto-perfil" src={foto}/>
        </div>
        <div className="texto-sobre">
          <p id="sobre-text">
          Sobre<br/>
          Estudante de Desenvolvimento Web na
          <strong> Trybe</strong>. <br />
          Adoro <strong>música, gatos e documentários aleatórios</strong>; <br/>
          e jogos como <strong>Don't Starve Together</strong>, <strong>Minecraft</strong>, <strong>Wild Rift</strong> e <strong>Card/Board Games</strong>!
          </p>
        </div>
          <nav id="menu">
            <Link to="/Projetos" className="links-nav">Linkedin</Link>
            <Link className="links-nav">Fale comigo</Link>
          </nav> 
      </section>
    </>
    )
  }
}
export default SobreMim;
