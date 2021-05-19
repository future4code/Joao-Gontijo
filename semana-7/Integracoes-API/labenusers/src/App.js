import './App.css';
import React from 'react';
import ListaDeUsuarios from './Paginas/ListaDeUsuarios';
import CriarUsuario from './Paginas/CriarUsuario';

export default class App extends React.Component {
  state = {
    pagina: 'CriarUsuario',
  };

  trocaDePagina = () => {
    if (this.state.pagina === 'CriarUsuario') {
      this.setState({ pagina: 'ListaDeUsuarios' });
    } else if (this.state.pagina === 'ListaDeUsuarios') {
      this.setState({ pagina: 'CriarUsuario' });
    }
  };

  render() {
    const renderizarPagina = () => {
      if (this.state.pagina === 'ListaDeUsuarios') {
        return <ListaDeUsuarios trocaDePagina={this.trocaDePagina} />;
      } else if (this.state.pagina === 'CriarUsuario') {
        return <CriarUsuario trocaDePagina={this.trocaDePagina} />;
      }
    };

    return <div className="App">{renderizarPagina()}</div>;
  }
}
