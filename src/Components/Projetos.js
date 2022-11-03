import React from "react";
import './CSS/Projetos.css';
import img2 from '../Images/deck-maker.mp4';
import img from '../Images/3.png';

class Projetos extends React.Component {
  render() {
    return (
      <div className="geralzao-projetos">
      <section className="geral-projetos">
        <article id="slide-projeto">
          <video height="500px" width="700px" src={img2} loop autoplay controls />
        </article>
          <article id="area-projetos">
            <div className="projeto">
              <img className="proj-img" alt="img" src={img} />
            </div>
            <div className="projeto">
              <img className="proj-img" alt="img" src={img} />
            </div>
          </article>
      </section>
      </div>
    )
  }
}
export default Projetos;