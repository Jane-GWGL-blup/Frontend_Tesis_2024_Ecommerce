// Simulación de la API para obtener y actualizar categorías
export const getCategoryData = async (categoryId) => {
    // Aquí iría la llamada real a la API para obtener datos de la categoría
    return {
      name: 'Sample Category',
      description: 'Sample Description',
    };
  };
  
  export const updateCategoryData = async (categoryId, data) => {
    // Aquí iría la llamada real a la API para actualizar datos de la categoría
    console.log(`Updating category ${categoryId} with data:`, data);
    return {
      success: true,
    };
  };
  