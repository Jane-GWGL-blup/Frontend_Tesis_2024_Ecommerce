import React,{createContext, useContext,useState} from 'react'

const CartContext = createContext();

export const useCart = () =>{
    return useContext(CartContext)
};

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState({items:[]})
    return(
        <CartContext.Provider value={{cart,setCart}}>
            {children}
        </CartContext.Provider>
    )
}