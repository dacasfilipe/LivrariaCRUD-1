import React, { useContext } from 'react';
import _ from 'lodash';
import Contato from './Contato';
import ContatosContext from '../context/ContatosContext';

const ContatosList = () => {
  const { contatos, setContatos } = useContext(ContatosContext);

  const handleRemoveContato = (id) => {
    setContatos(contatos.filter((contato) => contato.id !== id));
  };

  return (
    <React.Fragment>
      <div className="book-list">
        {!_.isEmpty(contatos) ? (
          contatos.map((contato) => (
            <Contato key={contato.id} {...contato} handleRemoveContato={handleRemoveContato} />
          ))
        ) : (
          <p className="message">No contacts available. Please add some contacts.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default ContatosList;