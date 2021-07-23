import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

export const Listar = () => {
  const { estudiante } = useSelector((store) => store.estudiante);
  console.log(estudiante);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Telefono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {estudiante ? (
            estudiante.map((element) => (
              <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.nombre}</td>
                <td>{element.apellido}</td>
                <td>{element.telefono}</td>
              </tr>
            ))
          ) : (
            <p>Datos no disponibles</p>
          )}
        </tbody>
                    
      </Table>
    </div>
  );
};
