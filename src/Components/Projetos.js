import React from "react";
import './CSS/Projetos.css';
import { Carousel } from 'react-carousel-minimal';
import { Link } from "react-router-dom";
import img2 from '../Images/2.png';
import img3 from '../Images/3.png';

class Projetos extends React.Component {
  render() {
    const data = [
      {image: img2, caption: 'Projeto 1: Solar System'},
      {image: img3, caption: 'Projeto 2: Portfolio Pessoal'},
      {image: img3, caption: 'Projeto 3: Carrinho de compras'},
    ];
    return (
      <div className="geralzao-projetos">
{/*         <nav id="menu-proj">
          <Link to="/" className="links-nav-proj">Página Inicial</Link>
          <Link to="/contato" className="links-nav-proj">Contato</Link>
        </nav> */}
      <section className="geral-projetos">
        <article id="slide-projeto">
          <Carousel
          id="slide"
          data={data}
          style={{
            textAlign: "center",
            minWidth: "600px",
            minHeight: "400px",
            captionPosition:"center",
            slideBackgroundColor:"darkgrey",
            thumbnailWidth:"700px",
          }}/>
        </article>
          <article id="area-projetos">
            <div className="projeto">
              <img className="proj-img" alt="img" src={img2} />
            </div>
            <div className="projeto">
              <img className="proj-img" alt="img" src={img2} />
            </div>
{/*             <div className="projeto">
            <img className="proj-img" alt="img" src={img3} />
              <span>Projeto</span>
            </div>
            <div className="projeto">
            <img className="proj-img" alt="img" src={img2} />
              <span>Projeto</span>
            </div> */}
          </article>
      </section>
      </div>
    )
  }
}
export default Projetos;