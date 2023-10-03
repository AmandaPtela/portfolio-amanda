import React from "react";
import { Link } from "react-router-dom";
import '../CSS/Contato.css';
import img from '../Images/img.png';

class Contato extends React.Component {
  render() {
    return (
      <div id="contato">
        <section id="contatos">
          <div><p id="contato-title"> Contato </p></div>
          <div id="links-contatos">
            <a href="https://www.linkedin.com/in/amandaptela/"><img alt="" height="10px" id="rede-2"
              src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"
              target="_blank" rel="noopener noreferrer" />
            </a>
            <a href="https://github.com/AmandaPtela"><img alt="" height="10px" id="rede-3"
              src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
              target="_blank" rel="noopener noreferrer" />
            </a>
            <a href="mailto:mandaptela@gmail.com" target="_blank" rel="noopener noreferrer" id="rede-4">Send me an email
            </a>
          </div>
        <Link to="/"> <img id="voltar-btn" src={img} /></Link>
        </section>
      </div>
    )
  }
}
export default Contato;
