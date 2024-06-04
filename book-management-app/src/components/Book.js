import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Contato = ({
  id,
  nome,
  telefone,
  email,
  datanascimento,
  handleRemoveContato
}) => {
  const history = useHistory();

  return (
    <Card style={{ width: '18rem' }} className="book">
      <Card.Body>
        <Card.Title className="book-title">{nome}</Card.Title>
        <div className="book-details">
          <div>Nome: {nome}</div>
          <div>Telefone: {telefone} </div>
          <div>Email: {email} </div>
          <div>Data de Nascimento: {new Date(datanascimento).toDateString()}</div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveContato(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );};
export default Contato;