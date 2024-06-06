import React, { useContext } from 'react';
import ContatoForm from './ContatoForm';
import { useParams } from 'react-router-dom';
import ContatosContext from '../context/ContatoContext';

const EditContato = ({ history }) => {
  const { contatos, setContatos } = useContext(ContatosContext);
  const { id } = useParams();
  const contatoToEdit = contatos.find((contato) => contato.id === id);

  const handleOnSubmit = (contato) => {
    const filteredContatos = contatos.filter((contato) => contato.id !== id);
    setContatos([contato, ...filteredContatos]);
    history.push('/');
  };

  return (
    <div>
      <ContatoForm contato={contatoToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditContato;