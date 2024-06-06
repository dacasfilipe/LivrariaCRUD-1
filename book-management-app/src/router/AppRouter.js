import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import ContatosContext from '../context/ContatoContext';
import EditContato from '../components/EditContato';
import AddContato from '../components/AddContato';
import ContatosList from '../components/ContatosList';
import useLocalStorage from '../hooks/useLocalStorage';

const AppRouter = () => {
  const [contatos, setContatos] = useLocalStorage('contatos', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <ContatosContext.Provider value={{ contatos, setContatos }}>
            <Switch>
              <Route component={ContatosList} path="/" exact={true} />
              <Route component={AddContato} path="/add" />
              <Route component={EditContato} path="/edit/:id" />
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </ContatosContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
