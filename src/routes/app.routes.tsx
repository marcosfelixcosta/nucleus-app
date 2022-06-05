import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import Chamados from '../pages/Chamado';
import Login from '../pages/Login';
import SigIn from '../pages/User';

const AppRoutes: React.FC = () => (



  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/user" component={SigIn} />


   
      <Route path="/dashboard" component={Dashboard} isPrivate/>
      <Route path="/chamados" component={Chamados} isPrivate/>
     
     
      <Layout> {/* Layout, server para montar uma aplicação SPA */}
    </Layout>  {/* Vamos colocar somente as página do dasbord com SPA */}
  </Switch>


);

export default AppRoutes;