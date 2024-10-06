import React, { useState } from 'react';
import {  AdminCreateProduct } from '../../components';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../../services/ProductService';


const ProductCreatePage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    categoryId: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataWithConvertedValues = {
        ...formData,
        price: parseInt(formData.price,10),
        stock: parseInt(formData.stock,10),
        categoryId: parseInt(formData.categoryId,10)
      }
      await createProduct(formDataWithConvertedValues);
      navigate('/admin/products'); // Redirigir a la lista de productos después de crear uno nuevo
    } catch (error) {
      console.error('Error creating product:', error);
      alert('Error creating product');
    }
  };

  return (
    <div>
      <h2>Create New Product</h2>
      <AdminCreateProduct formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default ProductCreatePage;