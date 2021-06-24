import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, withRouter } from 'react-router-dom';
import Input from '../../components/forms/Input';
import Pagina from '../../components/Pagina';
import { login } from '../../services/auth';
import UsuarioService from '../../services/UsuarioService';
import validator from '../../validator/UsuarioValidator';

const Login = (props) => {

  const { register, handleSubmit, errors } = useForm()
  const reference = { register, validator, errors }

  function enviarDados(data) {
    UsuarioService.login(data).then(results => {
      console.log(results.data.token)

      login(results.data.token)

      props.history.push('/alunos')
    }).catch(error => {
      console.log(error.response.data)
    })
  }

  return (
    <Pagina titulo="Login">

      <Form>

        <Input label="E-mail" name="email" reference={reference} type="email" />
        <Input label="Senha" name="password" reference={reference} type="password" />

        <div className="text-center mt-3 mb-3">
          <Button variant="success" onClick={handleSubmit(enviarDados)} >Salvar</Button>
          <Link to="/alunos" className="btn btn-danger ml-1">Voltar</Link>
        </div>
      </Form>
    </Pagina>
  )
}

export default withRouter(Login)