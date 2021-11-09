import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Alunos from './pages/Alunos/Index';

import Login from './pages/Login/Login';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/alunos" element={<Alunos />}/>
            </Routes>
        </BrowserRouter>
    );
}