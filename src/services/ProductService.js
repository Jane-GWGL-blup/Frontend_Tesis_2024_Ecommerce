// Simulación de la API para obtener y actualizar categorías
export const getProductData = async (productId) => {
    // Aquí iría la llamada real a la API para obtener datos de la categoría
    return {
      name: 'Sample Product',
      description: 'Sample Description',
      price: 20.99,
      stock: 3,
      image: 'https://via.placeholder.com/150',
    };
  };
  
  export const updateProductData = async (productId, data) => {
    // Aquí iría la llamada real a la API para actualizar datos de la categoría
    console.log(`Updating product ${productId} with data:`, data);
    return {
      success: true,
    };
  };