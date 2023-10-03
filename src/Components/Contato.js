import React from "react";
import { Link } from "react-router-dom";
import '../CSS/Contato.css';
import img from '../Images/img2.png';
import FormDialog from "./Form";

class Contato extends React.Component {
  render() {
    return (
      <div id="contato">
        <section id="contatos">
          <div><p id="contato-title"> Contato </p></div>
          <div id="links-contatos">
            <a href="https://www.linkedin.com/in/amandaptela/" target="_blank" rel="noopener noreferrer" >
              <img alt="" height="10px" id="rede-2"
                src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"
              />
            </a>
            <a href="https://github.com/AmandaPtela" target="_blank" rel="noopener noreferrer">
              <img alt="" height="10px" id="rede-3"
                src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
              />
            </a>
            <FormDialog />
          </div>
        <Link to="/"> <img id="voltar-btn" alt="go-back-button" src={img} /></Link>
        </section>
      </div>
    )
  }
}
export default Contato;
