import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { getAllCategories } from '../../services/CategoryService';

const AdminEditProductForm = ({ formData,handleChange,handleSubmit }) => {
  const [categories,setCategories] = useState([]);

  useEffect(() =>{
    const fetchCategories = async () => {
      try {
        const categoryList = await getAllCategories()
        setCategories(categoryList)
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }
    fetchCategories()
  },[])
  
  return (
    <Form onSubmit={handleSubmit}>
      {/* Nombre del Producto */}
      <Form.Group controlId="productName">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name }
          onChange={handleChange}
          required
        />
      </Form.Group>

      {/* Descripción del Producto */}
      <Form.Group controlId="productDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          value={formData.description || ''}
          onChange={handleChange}
          required
        />
      </Form.Group>

      {/* Precio del Producto */}
      <Form.Group controlId="productPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={formData.price || ''}
          onChange={handleChange}
          required
        />
      </Form.Group>

      {/* Stock del Producto */}
      <Form.Group controlId="productStock">
        <Form.Label>Stock</Form.Label>
        <Form.Control
          type="number"
          name="stock"
          value={formData.stock || ''}
          onChange={handleChange}
          required
        />
      </Form.Group>

      {/* Selección de Categoría */}
      <Form.Group controlId="productCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control
          as="select"
          name="categoryId"
          value={formData.categoryId || ''}
          onChange={handleChange}
          required
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit">
        Save Product
      </Button>
    </Form>
  );
  
};

export default AdminEditProductForm


