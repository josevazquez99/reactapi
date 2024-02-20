// MotoDetail.jsx
import React from "react";

const MotoDetail = ({ moto }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{moto.marca}</h5>
          <p className="card-text">{moto.modelo}</p>
          <p className="card-text">{moto.anio}</p>
          <p className="card-text">{moto.color}</p>
        </div>
      </div>
    </div>
  );
};

export default MotoDetail;
