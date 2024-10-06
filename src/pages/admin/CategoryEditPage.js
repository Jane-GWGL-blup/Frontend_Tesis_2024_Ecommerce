import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCategoryById, updateCategory } from '../../services/CategoryService'; // Importar el servicio
import { AdminEditCategoryForm } from '../../components';

const CategoryEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Añadimos un estado para manejar errores

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const category = await getCategoryById(id);
        console.log('Datos de la categoría:', category); // Añade este log
        if (category) {
          setFormData({
            name: category.name ,  
            description: category.description  
          });
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching category data:', error);
        setLoading(false);
      }
    };
  
    fetchCategoryData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateCategory(id, formData);
      navigate('/admin/categories');
    } catch (error) {
      console.error('Error updating category:', error);
      alert('Error updating category');
    }
  };

  // Si está cargando o si hay un error, mostramos el mensaje adecuado
  if (loading) {
    return <p>Loading category data...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Edit Category</h2>
      <AdminEditCategoryForm 
        formData={formData} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default CategoryEditPage;