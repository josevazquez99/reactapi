// MotoForm.jsx
import React, { useState } from 'react';
import { addMoto, editMoto } from '../../services/motoService';
import { useParams } from "react-router-dom";

const MotoForm = () => {
  const [moto, setMoto] = useState({
    marca: '',
    modelo: '',
    anio: 0,
    color: '',
  });

  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMoto((prevMoto) => ({ ...prevMoto, [name]: value }));
  };

  const editMoto = (e) => {
  e.preventDefault();
  editMoto(id, moto)  
    .then(() => {
      console.log("La moto fue editada");
    })
    .catch((error) => console.log(error));
};

  const addMoto = (e) => {
    e.preventDefault();
    addMoto(moto)
      .then(() => {
        console.log("La moto fue añadida");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container mt-4">
      <br></br>
      <h2>{id ? 'Editar' : 'Añadir'}</h2>

      <form onSubmit={id ? editMoto : addMoto}>
        <div className="mb-3">
          <label className="form-label">Marca:</label>
          <input
            type="text"
            className="form-control"
            name="marca"
            value={moto.marca}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Modelo:</label>
          <input
            type="text"
            className="form-control"
            name="modelo"
            value={moto.modelo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Año:</label>
          <input
            type="number"
            className="form-control"
            name="anio"
            value={moto.anio}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Color:</label>
          <input
            type="text"
            className="form-control"
            name="color"
            value={moto.color}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {id ? 'Editar' : 'Añadir'}
        </button>
      </form>
    </div>
  );
};

export default MotoForm;
