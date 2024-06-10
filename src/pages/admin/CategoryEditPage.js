import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { getCategoryData, updateCategoryData } from '../../services/CategoryService'; // Importar el servicio
import { AdminEditCategoryForm } from '../../components';

const CategoryEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  

  const handleSubmit = async (formData) => {
    // Llamada a la API simulada para actualizar la categoría
    await updateCategoryData(id, formData);
    navigate('/admin/categories');
  };

  return (
    <div>
      <h1>Edit Category</h1>
      <AdminEditCategoryForm 
        categoryId={id}
        getCategoryData={getCategoryData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default CategoryEditPage;
