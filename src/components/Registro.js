import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "../hooks/useForm";
import "../styles/Registro.css";
import { registroEmailPasswordNombre } from "../actions/action";
import { useDispatch } from "react-redux";

export const Registro = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    nombre: "",
    email: "",
    pass: "",
    checkpass: "",
  });

  const { nombre, email, pass, checkpass } = formValues;

  const handleRegistro = (e) => {
    e.preventDefault();
    console.log(nombre, pass, email);
    dispatch(registroEmailPasswordNombre(email, pass, nombre));
  };

  return (
    <div>
      <Form onSubmit={handleRegistro}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="nombre"
            value={nombre}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="pass"
            value={pass}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRepitPassword">
          <Form.Label>Repita contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="checkpass"
            value={checkpass}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Registrarse
        </Button>
      </Form>
    </div>
  );
};

export default Registro;
