// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/NavBar';
import './components/styles.css';
import MotoList from './components/moto/MotoList';
import MotoDetail from './components/moto/MotoForm';
import MotoForm from './components/moto/MotoDetail';

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <div className="container-content">
        <Routes>
          <Route path="/" element={<MotoList />} />
          <Route path="/motos" element={<MotoList />} />
          <Route path="/motos/:id" element={<MotoDetail />} />
          <Route path="/motos/new" element={<MotoForm/>} />
          <Route path="/motos/edit/:id" element={<MotoForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
