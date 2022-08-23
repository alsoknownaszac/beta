import { createContext, useContext, useReducer } from "react";

const storeContext = createContext();
const dispatchContext = createContext({});

const ACTIONS = {
  Properties: "list",
  Property: "detail",
  Lands: "lands",
  Houses: "houses",
  Stores: "stores",
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.Properties:
      return { ...state, properties: payload };
    default:
      return properties;
  }
};

const initialState = {
  properties: [],
  property: {},
};

export const PropertyContext = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <dispatchContext.Provider value={dispatch}>
        <storeContext.Provider value={store}>{children}</storeContext.Provider>
      </dispatchContext.Provider>
    </>
  );
};

export const usePropertyStore = () => useContext(storeContext);
export const usePropertyDispatch = () => useContext(dispatchContext);
