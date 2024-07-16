import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductData, updateProductData } from '../../services/ProductService'; // Importar el servicio
import { AdminEditProductForm } from '../../components';

const ProductEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  

  const handleSubmit = async (formData) => {
    // Llamada a la API simulada para actualizar la categoría
    await updateProductData(id, formData);
    navigate('/admin/products');
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <div className='divider-admin'/>
      <AdminEditProductForm 
        categoryId={id}
        getProductData={getProductData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default ProductEditPage;
