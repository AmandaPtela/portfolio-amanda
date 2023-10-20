import React from "react";
import '../CSS/SobreMim.css';
import FormDialog from "./Form";

class SobreMim extends React.Component {
  render() {
    return (
      <>
        <section className="sobre">
          <div id="sobre">
            <div className="area-texto-sobre">
              <p id="sobre-text">
                Desenvolvedora Fullstack <br />
                Adoro <strong> música, gatos, basquete</strong>, <strong>documentários aleatórios </strong>
                e jogos como <strong>Wild Rift</strong>, <strong>Card/Board Games</strong> entre outros!
              </p>
              <hr className="about-line" />
              <nav id="menu">
                <div className="links-nav">
                  <a id="menu-button" href="https://github.com/AmandaPtela" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <FormDialog />
                </div>
              </nav>
            </div>
          </div>
          <p id="proj-area-title">Stacks</p>
          <hr className="stacks-lines" />
          <div id="space-shields">
            <div className="images"><i className="icons" class="devicon-git-plain-wordmark"></i></div>
            <div className="images"><i className="icons" class="devicon-trello-plain-wordmark"></i></div>
            <div className="images"><i className="icons" class="devicon-nodejs-plain-wordmark"></i></div>
            <div className="images"><i className="icons" class="devicon-mysql-plain-wordmark"></i></div>
            <div className="images"><i className="icons" class="devicon-express-original-wordmark"></i></div>
            <div className="images"><i className="icons" class="devicon-sequelize-plain-wordmark"></i></div>
            <div className="images"><i className="icons" class="devicon-jest-plain"></i></div>
            <div className="images"><i className="icons" class="devicon-redux-original"></i></div>
            <div className="images"><i className="icons" class="devicon-react-original-wordmark"></i></div>
            <div className="images"><i className="icons" class="devicon-docker-plain-wordmark"></i></div>
            <div className="images"><i className="icons" class="devicon-css3-plain-wordmark"></i></div>
            <div className="images"><i className="icons" class="devicon-html5-plain-wordmark"></i></div>
            <div className="images"><i className="icons" class="devicon-typescript-plain"></i></div>
            <div className="images"><i className="icons" class="devicon-javascript-plain"></i></div>
          </div>
          <hr className="stacks-lines" />
        </section>
      </>
    )
  }
}
export default SobreMim;
