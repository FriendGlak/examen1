import { types } from "../types/types";

const initialState = {
  id: "",
  name: "",
};

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case types.Login:
      return {
        id: action.payload.id,
        name: action.payload.displayName,
      };
    case types.Logout:
      return { id: "", name: "" };
    default:
      return state;
  }
};
