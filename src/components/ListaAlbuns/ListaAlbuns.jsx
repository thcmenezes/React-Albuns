import React, { Component } from "react"
import CardAlbum from "../CardAlbum/CardAlbum"
import "./estilo.css";

class ListaDeAlbuns extends Component {
    render() {
        return (
            <ul className="lista-albuns">
            {this.props.albuns.map(
                (album, indice) => {
                    return (
                        <li className="lista-albuns_item" key={indice}>
                            <CardAlbum titulo={album.titulo} texto={album.texto}/>
                        </li>
                    );
                }
            )}
        </ul>
        );
    }
}

export default ListaDeAlbuns