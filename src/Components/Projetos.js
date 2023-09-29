import React from "react";
import '../CSS/Projetos.css';
import BasicModal from "./Modal";
import img1 from '../Images/img-deck-maker.png';
import img from '../Images/lectures-node.png';


function Projetos() {
  const projetos = [
    { nome:'Deck Maker',
      descricao: 'Este projeto é um construtor de baralho, onde o usuário consegue criar um baralho, adicionar e remover uma carta do baralho criado, visualizar todas as cartas que foram adicionadas ao baralho e filtrar as cartas do baralho',
      linkDeploy: "https://deck-maker-app.vercel.app/", 
      linkRepo: 'https://github.com/AmandaPtela/deck-maker', 
      image: {img1} },
    { nome:'Portfólio',
      descricao: '- Em desenvolvimento - ', 
      linkDeploy: 'https://portfolio-amandaptela.vercel.app/', 
      linkRepo: 'https://github.com/AmandaPtela/portfolio-amanda',
      image: {img} },
    { nome:'Lectures - Node', 
      descricao: '- Em desenvolvimento - Repositório feito para consultas durante estudos sobre NodeJS.',
      linkDeploy: '',
      linkRepo: 'https://github.com/AmandaPtela/lectures-node',
      image: {img} },
    { nome:'WalletExp',
      descricao: 'Aplicação para anotação de gastos.',
      linkDeploy: 'https://walletexp-one.vercel.app/', 
      linkRepo: 'https://github.com/AmandaPtela/WalletExp',
      image: {img} }]

  return (
    <div className="geralzao-projetos">
      <section id="opa">
        <p id="proj-area-title">Projetos</p>
        <hr className="projects-lines" />
          <article id="proj-org" >
            {projetos.map((projeto, index) => (
              <div key={index} className="projeto">
              <span className="proj-nome"><a href={projeto.link}>{projeto.nome}</a></span>
              {BasicModal(projeto.nome, projeto.descricao, projeto.linkDeploy, projeto.linkRepo, projeto.image)}
              </div>)
            )}
          </article>
      <hr className="projects-lines" />
      </section>
    </div>
  )
}
export default Projetos;