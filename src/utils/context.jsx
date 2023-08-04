import {createContext , useState} from 'react'

export const Context = createContext();

const appContext = ({children}) =>
{
    return(
        <Context.Provider>
            {children}
        </Context.Provider>
    )
}

export default appContext