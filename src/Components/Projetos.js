import React from "react";
import './CSS/Projetos.css';
import { Carousel } from 'react-carousel-minimal';
import { Link } from "react-router-dom";
import planets from '../Images/profile-img.jpg';
import img from '../Images/img.jpg';

class Projetos extends React.Component {
  render() {
    const data = [
      {image: planets, caption: 'Projeto 1: Solar System'},
      {image: img, caption: 'Projeto 2: Portfolio Pessoal'},
      {image: planets, caption: 'Projeto 3: Carrinho de compras'},
    ];
    return (
      <div className="geralzao-projetos">
        <nav id="menu-proj">
          <Link to="/" className="links-nav-proj">Página Inicial</Link>
          <Link to="/contato" className="links-nav-proj">Contato</Link>
        </nav>
      <section className="geral-projetos">
        <article id="slide-projeto">
          <Carousel
          id="slide"
          data={data}
          style={{
            textAlign: "center",
            minWidth: "600px",
            maxHeight: "500px",
            margin: "0px",
            captionPosition:"center",
            slideBackgroundColor:"darkgrey",
            thumbnailWidth:"700px",
          }}/>
          <span id="skills-area"> SKILLS </span>
        </article>
          <article id="area-projetos">
            <div className="projeto">
            <img className="proj-img" alt="img" src={img} />
              <span>Projeto</span>
            </div>
            <div className="projeto">
              <img className="proj-img" alt="img" src={img} />
              <span>Projeto</span>
            </div>
            <div className="projeto">
            <img className="proj-img" alt="img" src={img} />
              <span>Projeto</span>
            </div>
            <div className="projeto">
            <img className="proj-img" alt="img" src={img} />
              <span>Projeto</span>
            </div>
          </article>
      </section>
      </div>
    )
  }
}
export default Projetos;