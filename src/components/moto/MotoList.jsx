// MotoList.jsx
import React, { useEffect, useState } from "react";
import { getMotos, deleteMoto } from "../../services/motoService";
import { Link } from "react-router-dom";
import MotoDetail from "./MotoDetail"; 

const MotoList = () => {
  const [motos, setMotos] = useState([]);
  const [selectedMoto, setSelectedMoto] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await getMotos();
        setMotos(response.data);
      } catch (error) {
        console.error("Error al obtener motos:", error);
      }
    };

    obtenerDatos();
  }, []);

  const deleteMoto = (e) => {
    let motoId = e.target.id;
    deleteMoto(motoId)
      .then(() => {
        setMotos(motos.filter((moto) => moto._id !== motoId));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="motos">
      <div className="row">
        <br></br>
        {motos.map((moto, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{moto.marca}</h5>
                <p className="card-text">{moto.modelo}</p>
                <Link to={`/motos/?id=${moto._id}`} style={{ margin: "10px" }} className="btn btn-primary" onClick={() => setSelectedMoto(moto)}>Ver detalles</Link>
                <Link to={`/motos/edit/${moto._id}`} className="btn btn-warning">Editar</Link>
                <button className="btn btn-danger" id={moto._id} onClick={deleteMoto}>Eliminar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedMoto && <MotoDetail moto={selectedMoto} />}
    </div>
  );
};

export default MotoList;
