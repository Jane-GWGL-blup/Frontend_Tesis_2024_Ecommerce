import React from 'react';
import { Form, Button } from 'react-bootstrap';

export const AdminEditCategoryForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="categoryName">
        <Form.Label>Category Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name || ''}  // Nos aseguramos de que tenga un valor predeterminado vacío
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="categoryDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          value={formData.description || ''}  // Nos aseguramos de que tenga un valor predeterminado vacío
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Update Category
      </Button>
    </Form>
  );
};

export default AdminEditCategoryForm;