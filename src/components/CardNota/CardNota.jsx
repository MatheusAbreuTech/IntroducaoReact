import React, { Component } from "react";

import "./estilo.css";

class CardNota extends Component {
    render() {
        return (
            <section className="card-nota">
                <header className="titulo-item">
                    <h3>{this.props.titulo}</h3>
                </header>
                <p className="conteudo-item">{this.props.texto}</p>
            </section>
        );
    }
}

export default CardNota;
