import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button,Alert} from 'react-bootstrap';
import { createCategory } from '../../services/CategoryService';

const AdminCreateCategory = () => {
  const [categoryData,setCategoryData] = useState({
    name:'',
    description:''
  });
  const [error,setError] = useState('');
  const [success,setSuccess] = useState('');

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setCategoryData({
      ...categoryData,
      [name]:value
    })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      const response = await createCategory(categoryData);
      setSuccess('Categoria creada con exito');
      setCategoryData({
        name:'',
        description:''
      })
      setError('')
    } catch (error) {
      setError('Error al crear la categoría');
      setSuccess('');
    }
  }


  return (
    <div>
      <h2>Crear nueva categoría</h2>
      {success && <Alert variant="success">{success}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="categoryName">
          <Form.Label>Nombre de la categoría</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={categoryData.name}
            onChange={handleChange}
            placeholder="Ingresa el nombre de la categoría"
            required
          />
          <Form.Control.Feedback type="invalid">
            Por favor proporciona un nombre para la categoría.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="categoryDescription">
          <Form.Label>Descripción de la categoría</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={categoryData.description}
            onChange={handleChange}
            placeholder="Ingresa una descripción para la categoría"
            required
          />
          <Form.Control.Feedback type="invalid">
            Por favor proporciona una descripción para la categoría.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className='mt-3'>
          Crear categoría
        </Button>
      </Form>
    </div>
  );
};

export default AdminCreateCategory;

