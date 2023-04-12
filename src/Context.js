import { createContext, useReducer } from "react";
export const themeContext = createContext();

const intialState = {darkMode : false};

const themReducer = (state,action) => {
    switch(action.type){
        case 'toggle':
            return {darkMode : !state.darkMode};
            default:
                return state;

    }
};

export const ThemeProvider = (porps) =>{
    const [state,dispatch] = useReducer(themReducer,intialState);
    return (
        <themeContext.Provider value={{state,dispatch}}>
            {porps.children}
        </themeContext.Provider>
    );
};
