import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext'; // Asegúrate de importar correctamente el contexto de usuario
import { getUserCart } from '../services/CartService';

// Crear el contexto
const CartContext = createContext();

// Crear el proveedor del contexto
export const CartProvider = ({ children }) => {
  const { userData } = useContext(UserContext); // Usar useContext para obtener los datos del usuario
  const [cart, setCart] = useState({ items: [] });
  const [loading, setLoading] = useState(true);

  // Función para obtener la clave de localStorage específica del usuario
  const getCartStorageKey = () => {
    return userData ? `cart_${userData.id}` : 'cart_guest';
  };


  // Cargar el carrito desde localStorage cuando el usuario inicie sesión
  useEffect(() => {
    //LOADCART: Espera la respuesta del API
    const loadCart = async () => {
      try {
        const cartData = await getUserCart(); // Llama a la API para obtener el carrito
        setCart(cartData);
      } catch (error) {
        console.error('Error loading user cart:', error);
        clearCart();
      }
    };
    //asegura que el carrito solo se cargue cuando el usuario haya iniciado sesión
    if (userData) {
      loadCart(); // Carga el carrito cuando el usuario inicia sesión
    }
  }, [userData]);

  // Guardar el carrito en localStorage cada vez que cambie el estado del carrito
  useEffect(() => {
    if (cart) {
      if (cart.items.length > 0) {
        localStorage.setItem(getCartStorageKey(), JSON.stringify(cart));
      } else {
        localStorage.removeItem(getCartStorageKey());
      }
    }
  }, [cart]);

  // Función para actualizar el carrito globalmente
  const addToCart = (newItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.items.find(item => item.product.id === newItem.product.id);
      if (existingItem) {
        // Si el producto ya existe en el carrito, actualizamos la cantidad
        return {
          ...prevCart,
          items: prevCart.items.map(item =>
            item.product.id === newItem.product.id
              ? { ...item, quantity: item.quantity + newItem.quantity }
              : item
          ),
        };
      } else {
        // Si el producto no está en el carrito, lo agregamos como un nuevo item
        return {
          ...prevCart,
          items: [...prevCart.items, newItem],
        };
      }
    });
  };

  const clearCart = () => {
    setCart({ items: [] });
    localStorage.removeItem(getCartStorageKey()); // Borra el carrito de localStorage

  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, clearCart, loading }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar el contexto
export const useCart = () => useContext(CartContext);