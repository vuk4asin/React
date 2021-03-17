import { Paper } from "@material-ui/core";

export const isAuth = (state = false, action) => {
  switch (action.type) {
    case "IS_AUTH":
      return !state;
    default:
      return state;
  }
};

export const email = (state = "", action) => {
  switch (action.type) {
    case "EMAIL":
      return (state = action.payload);

    default:
      return state;
  }
};

export const name = (state = "", action) => {
  switch (action.type) {
    case "NAME":
      return (state = action.payload);

    default:
      return state;
  }
};
