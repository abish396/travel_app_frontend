import React, { useReducer } from "react";

const searchContext = React.createContext();


const { Provider } = searchContext;

const SearchStateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'action description':
        const newState = "";// do something with the action
        return newState;
      default:
        throw new Error();
    };
  }, []);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { searchContext, SearchStateProvider }