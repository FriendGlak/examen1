import { types } from "../types/types";
import { firebase, google, db } from "../firebase/firebaseConfig";

//Login con Google
export const loginGoogle = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(google)
      .then(({ user }) => {
        console.log(user);
        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

//Login con Email & Password

//Asíncrona
export const loginEmailPassword = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid.user.displayName));
        console.log("Bienvenute");
      })
      .catch((e) => {
        console.log(e);
        console.log("El usuario no existe");
      });
  };
};

//Sincrónica
export const login = (id, displayName) => {
  return {
    type: types.login,
    payload: {
      id,
      displayName,
    },
  };
};

//Registro
export const registroEmailPasswordNombre = (email, pass, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(async ({ user }) => {
        console.log(user);

        await user.updateProfile({ displayName: name });

        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

//Función asíncronica para registrar estudiantes.
export const registroEstudiante = (id, nombre, apellido, telefono) => {
  return async (dispatch) => {
    const nuevoEstudiante = {
      id: id,
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
    };

    await db.collection(`/Estudiante`).add(nuevoEstudiante);

    console.log(id, nombre, apellido, telefono);
    dispatch(registro(id, nombre, apellido, telefono));
  };
};

export const registro = (id, nombre, apellido, telefono) => {
  return {
    type: types.Registrar,
    payload: {
      id,
      nombre,
      apellido,
      telefono,
    },
  };
};

//Función asíncronica para listar estudiantes.
export const listarEstudiante = () => {
  return async (dispatch) => {
    const data = await db.collection(`/Estudiante`).get();
    const estudiante = [];
    console.log(data);

    data.forEach((est) => {
      estudiante.push({
        ...est.data(),
      });
    });
    console.log(estudiante);
    dispatch(listar(estudiante));
  };
};

//Función síncronica para listar estudiantes.
export const listar = (estudiantes) => {
  return { type: types.Listar, payload: estudiantes };
};
