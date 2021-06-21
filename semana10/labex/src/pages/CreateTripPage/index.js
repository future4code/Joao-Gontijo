import React, { useState } from 'react'
import PageTitle from '../../components/PageTitle'
import { FormContainer } from '../../components/FormContainer'
import { TextField, Button } from '@material-ui/core'
import { KeyboardDatePicker } from '@material-ui/pickers';
import { useForm } from '../../hooks/useForm';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { useProtectedPage } from '../../hooks/useProtectedPage';

const CreateTripPage = () => {
  const [form, onChangeInput] = useForm({
    name: '',
    planet: '',
    description: '',
    duration: ''
  })

  useProtectedPage()


  const history = useHistory()

  const [date, setDate] = useState(new Date())

  const onSubmitForm = (event) => {
    event.preventDefault()
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

    const body = {
      name: form.name,
      planet: form.planet,
      date: formattedDate,
      description: form.description,
      durationInDays: form.duration
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-gontijo/trips', body, {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    }).then((response) => {
      history.push('/viagens')
    })
  }
  return <div>
    <PageTitle title={'Criar viagem'}/>
    <FormContainer onSubmit={onSubmitForm}>
      <TextField
        label={'Nome'} 
        onChange={onChangeInput}
        name={'name'}
        value={form['name']}
      />
      <TextField
        label={'Planeta'}
        onChange={onChangeInput}
        name={'planet'}
        value={form['planet']}
      />
      <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          label="Data"
          value={date}
          onChange={date => setDate(date)}
        />
      <TextField
        label={'Descrição'}
        onChange={onChangeInput}
        name={'description'}
        value={form['description']}
      />
      <TextField
        label={'Duração em dias'} type={'number'}
        onChange={onChangeInput}
        name={'duration'}
        value={form['duration']}
      />
      <Button variant={'contained'} color={'primary'} type={'submit'}>Criar</Button>
    </FormContainer>
  </div>
}

export default CreateTripPage