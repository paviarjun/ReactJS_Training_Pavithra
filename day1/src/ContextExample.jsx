import React, {createContext} from "react";

export const Context = createContext('');

const ContextProvider = ({children, name}) => {
    return(
        <Context.Provider value={name}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;