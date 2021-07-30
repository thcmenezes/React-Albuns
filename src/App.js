import ListaDeAlbuns from "./components/ListaAlbuns";
import FormularioCadastro from "./components/FormularioCadastro"
import { Component } from "react";
import "./assets/App.css";
import './assets/index.css';

export default class App extends Component {

  constructor(){
    super();

    this.state = {
      albuns:[]
    }
  }

  criarCard(titulo, texto){
    const novoCard = {titulo, texto};
    const novoArrayAlbuns = [...this.state.albuns,novoCard]
    const novoEstado = {
      albuns:novoArrayAlbuns
    }
    this.setState(novoEstado)
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarCard={this.criarCard.bind(this)}/>
        <ListaDeAlbuns albuns={this.state.albuns}/>
      </section>
    );
  }
}
