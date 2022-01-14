import React, { Component } from "react";

import FormularioCadastro from "./components/Formulario/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";

class App extends Component {
    constructor() {
        super();

        this.state = {
            notas: [],
        };
    }

    criarNota(titulo, texto) {
        const novaNota = { titulo, texto };
        const novoArrayNotas = [...this.state.notas, novaNota];
        const novoStado = {
            notas: novoArrayNotas,
        };
        this.setState(novoStado);
    }

    render() {
        return (
            <div>
                <FormularioCadastro criarNota={this.criarNota.bind(this)} />
                <ListaDeNotas notas={this.state.notas} />
            </div>
        );
    }
}

export default App;
