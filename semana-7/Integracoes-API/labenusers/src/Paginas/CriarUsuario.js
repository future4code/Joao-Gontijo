import '../App.css';
import axios from 'axios';
import React from 'react';

export default class CriarUsuario extends React.Component{
  state = {
    inputNome: '',
    inputEmail: '',
  };

  handleName = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  handleEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  createUser = () => {
    const header = {
      headers: {
        Authorization: 'joaopedro-martinsgontijo-paiva',
      },
    };
    const url =
      'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/';
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail,
    };

    axios
      .post(url, body, header)
      .then((res) => {
        console.log(res);
        alert('Usuário criado!');
        this.setState({ inputNome: '', inputEmail: '' });
      })
      .catch((err) => {
        console.log(err);
        alert('Erro! Seu pc vai explodir :P');
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Labenusers</h1>
        <button onClick={this.props.trocaDePagina}>Troca de Página</button>
        <h1>Criar usuário</h1>
        <input
          type="text"
          placeholder="Nome"
          value={this.state.inputNome}
          onChange={this.handleName}
        ></input>
        <input
          type="email"
          placeholder="E-mail"
          value={this.state.inputEmail}
          onChange={this.handleEmail}
        ></input>
        <button onClick={this.createUser}>Criar</button>
      </div>
    );
  }
}
