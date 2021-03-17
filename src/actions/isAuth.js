export const isAuth = () => {
  return {
    type: "IS_AUTH",
  };
};

export const email = (email) => {
  return {
    type: "EMAIL",
    payload: email,
  };
};

export const name = (name) => {
  return {
    type: "NAME",
    payload: name,
  };
};
