import { types } from "../types/types";

export const estudianteReducer = (state = [], action) => {
  switch (action.type) {
    case types.Registrar:
      return {
        id: action.payload.id,
        nombre: action.payload.nombre,
        apellido: action.payload.apellido,
        telefono: action.payload.telefono,
      };
    case types.Listar:
      return {
        ...state,
        estudiante: [...action.payload]
      };

    default:
      return state;
  }
};
