import { ADD_DATA, ADD_LANG, ADD_LOGIN, ADD_PAYMENT } from "./ActionTypes";

const init = {
  lang: "telgu",
  payment: false,
  login: false,
  data: [],
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case ADD_LANG:
      return { ...store, lang: payload };
    case ADD_PAYMENT:
      return { ...store, payment: payload };
    case ADD_LOGIN:
      return { ...store, login: payload };
    case ADD_DATA:
      return { ...store, data: payload };

      default: return store
  }
};
