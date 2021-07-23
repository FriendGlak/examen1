import { types } from "../types/types";

export const registroReducer = (state = {}, action) => {
  switch (action.type) {
    case types.Login:
      return {
        id: action.payload.id,
        name: action.payload.displayName,
      };
    case types.Logout:
      return {};
    default:
      return state;
  }
  return;
};

export default registroReducer;
