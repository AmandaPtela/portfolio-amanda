import React from "react";
import '../CSS/Habilidades.css';

class Habilidades extends React.Component {
  render() {
    return (
      <div id="habilidades">
        <section id="secao-habil">
          <p id="habi-ti"> Habilidades </p>
          <p id="habi-texto">
            <strong>Git, HTML, CSS, JavaScript, Jest</strong><br />
            <strong>React, Redux, Context API</strong><br />
            <strong>React Testing Library</strong><br />
          </p>
        </section>
      </div>
    )
  }
}
export default Habilidades;