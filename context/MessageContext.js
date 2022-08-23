import { createContext, useEffect, useReducer, useContext } from "react";

const storeContext = createContext();
const dispatchContext = createContext({});

const Actions = {
  Inbox: "inbox",
  Sent: "sent",
  Draft: "draft",
  Trash: "trash",
};

const reducer = (messages, action) => {
  switch (action.type) {
    case Actions.Inbox:
      return { ...messages, data: [...messages, action.payload] };
    case Actions.Sent:
      return { ...messages, data: [...messages, action.payload] };
    case Actions.Draft:
      return { ...messages, data: [...messages, action.payload] };
    case Actions.Trash:
      return { ...messages, data: [...messages, action.payload] };
    default:
      return messages;
  }
};

const initialState = {
  messages: [],
  selectedMessage: null,
  messageBox: "inbox",
};

export const MessageContext = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <dispatchContext.Provider value={dispatch}>
        <storeContext.Provider value={store}>{children}</storeContext.Provider>
      </dispatchContext.Provider>
    </>
  );
};

export const useMessageStore = () => useContext(storeContext);
export const useMessageDispatch = () => useContext(dispatchContext);
