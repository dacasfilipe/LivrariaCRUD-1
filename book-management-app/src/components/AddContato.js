import React, { useContext } from 'react';
import ContatoForm from './ContatoForm';
import ContatoContext from '../context/ContatoContext';

const AddContato = ({ history }) => {
  const { contatos, setContatos } = useContext(ContatoContext);

  const handleOnSubmit = (contato) => {
    setContatos([contato, ...contatos]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <ContatoForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddContato;