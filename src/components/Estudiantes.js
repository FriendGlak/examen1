import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { registroEstudiante, listarEstudiante } from "../actions/action";
import { Listar } from "./Listar";
import { useEffect } from "react";

const Estudiantes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listarEstudiante());
  }, []);

  const [formValues, handleInputChange, reset] = useForm({
    id: "",
    nombre: "",
    apellido: "",
    telefono: "",
  });

  const { id, nombre, apellido, telefono } = formValues;

  const handleRegistro = (e) => {
    e.preventDefault();
    dispatch(registroEstudiante(id, nombre, apellido, telefono));
    console.log(id, nombre, apellido, telefono);
    reset();
  };

  return (
    <div>
      <h1>Módulo Estudiantes</h1>
                  
      <Form onSubmit={handleRegistro}>
                        
        <Form.Group className="mb-3" controlId="formBasicId">
                              <Form.Label>Id</Form.Label>
                              
          <Form.Control
            type="text"
            name="id"
            value={id}
            onChange={handleInputChange}
          />
                          
        </Form.Group>
                        
        <Form.Group className="mb-3" controlId="formBasicNombre">
                              <Form.Label>Nombre</Form.Label>
                              
          <Form.Control
            type="text"
            name="nombre"
            value={nombre}
            onChange={handleInputChange}
          />
                          
        </Form.Group>
                        
        <Form.Group className="mb-3" controlId="formBasicApellido">
                              <Form.Label>Apellido</Form.Label>
                              
          <Form.Control
            type="text"
            name="apellido"
            value={apellido}
            onChange={handleInputChange}
          />
                          
        </Form.Group>
                        
        <Form.Group className="mb-3" controlId="formBasicTelefono">
                              <Form.Label>Telefono</Form.Label>
                              
          <Form.Control
            type="text"
            name="telefono"
            value={telefono}
            onChange={handleInputChange}
          />
                          
        </Form.Group>
                        
        <Button variant="primary" type="submit">
                              Guardar                 
        </Button>
                
      </Form>
      <Listar />
    </div>
  );
};

export default Estudiantes;
