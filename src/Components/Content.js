import React from "react";
import '../CSS/Content.css';
import Projetos from "./Projetos";

class Content extends React.Component {

  render() {
    return (
      <div className="conteudo">
        <Projetos />
      </div>
    )
  }
}
export default Content;