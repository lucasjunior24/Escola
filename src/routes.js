import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Alunos from './pages/Alunos/Index';

import Login from './pages/Login/Login';
import NovoAluno from './pages/NovoAluno/Index';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/alunos" component={Alunos}/>
                <Route path="/aluno/novo/:alunoId" component={NovoAluno}/>
            </Switch>
        </BrowserRouter>
    );
}