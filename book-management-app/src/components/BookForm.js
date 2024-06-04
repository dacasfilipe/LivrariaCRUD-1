import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const ContatoForm = (props) => {
  const [contato, setContato] = useState({
    nome: props.contato ? props.contato.nome : '',
    email: props.contato ? props.contato.email : '',
    telefone: props.contato ? props.contato.telefone : '',
    datanascimento: props.contato ? props.contato.datanascimento : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { nome, email, telefone, datanascimento } = contato;

  // quando enviar o formulário chama esta função
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [nome, email, telefone, datanascimento];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const contato = {
        id: uuidv4(),
        nome,
        email,
        telefone,
        datanascimento
      };
      props.handleOnSubmit(contato);
    } else { //por favor preencha todos os campos
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { nome, value } = event.target;
    switch (nome) { //escolha caso o nome for ....
      case 'email':
        if (value === '' || parseInt(value) === +value) {
          setContato((prevState) => ({
            ...prevState,
            [nome]: value
          }));
        }
        break;
      case 'telefone':
        if (value === '' ) {
          setContato((prevState) => ({
            ...prevState,
            [nome]: value
          }));
        }
        break;
      default:
        setContato((prevState) => ({
          ...prevState,
          [nome]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="nome">
          <Form.Label>Nome do Contato </Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="nome"
            value={nome}
            placeholder="Enter name of contact"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Contato email</Form.Label>
          <Form.Control
            className="input-control"
            type="email"
            name="email"
            value={email}
            placeholder="Enter email of contato"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="telefone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="telefone"
            value={telefone}
            placeholder="Enter available telefone"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="datanascimento">
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="datanascimento"
            value={datanascimento}
            placeholder="Enter happy birthday to you"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContatoForm;