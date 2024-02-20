import axios from "axios";
// npm install axios

const url = "https://reactapi-two.vercel.app/motos";

// para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en una API de motos utilizando la librería Axios en JavaScript/Node.js.
const getMotos = () => axios.get(url);
const getModeloMoto = (modelo) => axios.get(`${url}?modelo=${modelo}`);
const getMotosId = (id) => axios.get(`${url}/${id}`);
const addMoto = (coche) => axios.post(url, coche);
const editMoto = (id, moto) => axios.put(`/motos/edit/${id}`, moto);
const deleteMoto = (id) => axios.delete(`${url}/${id}`);


export {
    getMotos,
    getModeloMoto,
    getMotosId,
    addMoto,
    editMoto,
    deleteMoto
}