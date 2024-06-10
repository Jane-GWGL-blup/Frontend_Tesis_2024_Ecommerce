import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const AdminEditCategoryForm = ({ categoryId, getCategoryData, handleSubmit }) => {
  const [formData, setFormData] = useState({
    categoryName: '',
    categoryDescription: '',
  });
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategoryData(categoryId);
      setFormData({
        categoryName: data.name,
        categoryDescription: data.description,
      });
    };
    fetchData();
  }, [categoryId, getCategoryData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      handleSubmit(formData);
    }
    setValidated(true);
  };
  
  return (
    <Form noValidate validated={validated} onSubmit={onSubmit}>
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
      Save Changes
    </Button>
    <Button className='m-2' variant="danger" as={Link} to="/admin/categories">
      Close
    </Button>
  </Form>
  )
}

export default AdminEditCategoryForm