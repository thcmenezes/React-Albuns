import React, { Component } from "react"
import "./estilo.css"

class CardAlbum extends Component {
    render() {
        return (
            <section className="card-album">
                <header className="card-album_cabecalho">
                    <h3 className="card-album_titulo">{this.props.titulo}</h3>
                </header>
                <p className="card-album_texto">{this.props.texto}</p>
            </section>
        );
    }
}

export default CardAlbum