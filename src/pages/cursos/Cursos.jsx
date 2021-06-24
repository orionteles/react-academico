import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pagina from '../../components/Pagina';
import apiAcademico from '../../services/apiAcademico';

export default () => {

  const [cursos, setCursos] = useState([
    {id:1, nome: 'ADS', duracao: 5},
    {id:2, nome: 'Redes', duracao: 5},
    {id:3, nome: 'Direito', duracao: 5},
    {id:4, nome: 'Segurança', duracao: 5},
    {id:5, nome: 'Enfermagem', duracao: 5},
  ])

  useEffect(()=>{
    apiAcademico.get('cursos').then(results=>{
      setCursos(results.data.data);
    })
  }, [])


  return (
    <Pagina titulo="Cursos">

      <Link className="btn btn-warning mb-3" to="/cursos/create">Novo</Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Ações</th>
            <th>Nome</th>
            <th>Duração</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map(item=>(
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.duracao}</td>
            </tr>
          ))}
        </tbody>
      </Table>

    </Pagina>
  )
}