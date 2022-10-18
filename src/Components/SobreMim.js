import React from "react";
import foto from '../Images/profile-img.jpg';
import './CSS/SobreMim.css';

class SobreMim extends React.Component {
  render() {
    return (
    <>
      <section id="sobre">
          <img id="foto" alt="foto-perfil" src={foto}/>
            <p id="sobre-title"> Sobre </p>
            <p id="sobre-text">
            Estudante de Desenvolvimento Web na
            <strong> Trybe</strong>. <br />
            Adoro <strong>música, gatos e documentários aleatórios</strong>; <br/>
            e jogos como <strong>Don't Starve Together</strong>, <strong>Minecraft</strong>, <strong>Wild Rift</strong> e <strong>Card/Board Games</strong>!
            </p>
      </section>
    </>
    )
  }
}
export default SobreMim;
