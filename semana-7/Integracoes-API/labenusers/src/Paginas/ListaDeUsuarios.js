import '../App.css';
import axios from 'axios';
import React from 'react';

export default class ListaDeUsuarios extends React.Component {
  state = {
    listaDeUsuarios: [],
  };

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    const header = {
      headers: {
        Authorization: 'joaopedro-martinsgontijo-paiva',
      },
    };
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
        header,
      )
      .then((res) => {
        this.setState({ listaDeUsuarios: res.data.result.list });
      })
      .catch(() => {});
  };
  deleteUser = (id) => {
    const header = {
      headers: {
        Authorization: 'joaopedro-martinsgontijo-paiva',
      },
    };
    if (window.confirm('Deletar Usuario?')) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
          header,
        )
        .then((res) => {
          this.getAllUsers();
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    const listaMap = this.state.listaDeUsuarios.map((user) => {
      return (
        <div key={user.id}>
          <p>{user.name}</p>
          <button onClick={() => this.deleteUser(user.id)}>Deletar</button>
        </div>
      );
    });

    return (
      <div className="App">
        <h1>Labenusers</h1>
        <button onClick={this.props.trocaDePagina}>Troca de Página</button>
        <h1>Lista de Usuários</h1>
        {listaMap}
      </div>
    );
  }
}
