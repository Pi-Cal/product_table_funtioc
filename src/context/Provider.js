import React, {useReducer, createContext, useState, Children, useEffect} from 'react'
import colorInitialState from './initialState/colorInitialState';
import productInitialState from './initialState/productInitialState';
import { color } from './reducer/color';
import { product } from './reducer/product';



export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
    const [colorState, colorDispatch] = useReducer(color, colorInitialState);
    const [productState, productDispatch] = useReducer(product, productInitialState);

    const value = {
        colorState,
        colorDispatch,
        productState,
        productDispatch
    }

    return(
        <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
    )
}

export default GlobalProvider