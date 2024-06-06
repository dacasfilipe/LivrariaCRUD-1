import React, { useContext } from 'react';
import _ from 'lodash';
import Contato from './Contato';
import ContatoContext from '../context/ContatoContext';

const ContatosList = () => {
  const { contatos, setContatos } = useContext(ContatoContext);

  const handleRemoveContato = (id) => {
    setContatos(contatos.filter((contato) => contato.id !== id));
  };

  return (
    <React.Fragment>
      <div className="contato-list">
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