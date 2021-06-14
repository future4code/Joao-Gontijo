import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { LoginForm } from './styles'
import PageTitle from '../../components/PageTitle'
import { useForm } from '../../hooks/useForm'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const LoginPage = () => {
  const history = useHistory()
  const [form, onChangeInput] = useForm({
    email: '',
    password: ''
  })


  const onSubmitLogin = (event) => {
    event.preventDefault()
    const body = {
      email: form.email,
      password: form.password
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-gontijo/login', body).then((response) => {
      window.localStorage.setItem('token', response.data.token)
      history.push('/viagens')
    })
  }

  return <div>
    <PageTitle title={'Login'}/>
    <LoginForm onSubmit={onSubmitLogin}>
      <TextField
        label={'Email'}
        type={'email'}
        onChange={onChangeInput}
        value={form['email']}
        name={'email'}
      />
      <TextField
        label={'Senha'}
        type={'password'}
        onChange={onChangeInput}
        value={form['password']}
        name={'password'}
      />
      <Button variant={'contained'} color={'primary'} type={'submit'}>Entrar</Button>
    </LoginForm>
  </div>
}

export default LoginPage