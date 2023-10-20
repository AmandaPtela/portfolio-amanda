import React from "react";
import '../CSS/Projetos.css';
import BasicModal from "./Modal";

function Projetos() {
  const projetos = [
    { nome:'Deck Maker',
      descricao: 'Este projeto é um construtor de baralho, onde o usuário consegue criar um baralho, adicionar e remover uma carta do baralho criado, visualizar todas as cartas que foram adicionadas ao baralho e filtrar as cartas do baralho',
      linkDeploy: "https://deck-maker-app.vercel.app/", 
      linkRepo: 'https://github.com/AmandaPtela/deck-maker', 
      image: '/static/media/deck-maker-1.2a182428.png'},
    { nome:'WalletExp',
      descricao: 'Aplicação para anotação de gastos onde o usuário consegue adicionar, remover e editar suas anotações.',
      linkDeploy: 'https://walletexp-one.vercel.app/', 
      linkRepo: 'https://github.com/AmandaPtela/WalletExp',
      image: '/static/media/img-walletexp.0db33c61.png'}]

  return (
    <div className="geralzao-projetos">
      <section id="opa">
        <p id="proj-area-title">Projetos</p>
          <article id="proj-org" >
            {projetos.map((projeto, index) => (
              <div key={index} className="projeto">
              <span className="proj-nome">{projeto.nome}</span>
              {BasicModal(projeto.nome, projeto.descricao, projeto.linkDeploy, projeto.linkRepo, projeto.image)}
              </div>)
            )}
          </article>
      </section>
    </div>
  )
}
export default Projetos;