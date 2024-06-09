import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button} from 'react-bootstrap';

const AdminCategoryForm = ({ formData, handleChange, handleSubmit, validated }) => {

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="categoryName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="categoryName"
          value={formData.categoryName}
          onChange={handleChange}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please provide a category name.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="categoryDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="categoryDescription"
          value={formData.categoryDescription}
          onChange={handleChange}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please provide a category description.
        </Form.Control.Feedback>
      </Form.Group>

      <Button className='m-2' variant="primary" type="submit">
        Submit
      </Button>
      <Button className='m-2' variant="danger" as={Link} to="/admin/categories">
        Close
      </Button>
    </Form>
  );
};

export default AdminCategoryForm;

