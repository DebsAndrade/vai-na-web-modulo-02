import { Component } from "react";
import Thumbnail from "./components/thumbnail/Thumbnail";

class App extends Component{
  state ={
    nome: "Débora Andrade",
    idade: 27,
    comidaFavorita: "Risotto de Camarão",
    musicasFavoritas: ["Running Up That Hill", "Master of Puppets", "Dançarina"],
    imagemFruta: "https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberry-1330459_960_720.jpg"
  }
  render(){
    return(
      <div>
        <h1>{this.state.nome}</h1>
        <h2>{this.state.idade} anos</h2>
        <h3>{this.state.comidaFavorita}</h3>
        <ul>
          {this.state.musicasFavoritas.map((musica) => <li>{musica}</li>)}
        </ul>
        <Thumbnail src={this.state.imagemFruta} alt="Minha fruta favorita, morango."></Thumbnail>
      </div>
    )
  }
}

export default App
