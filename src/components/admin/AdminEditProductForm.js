import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const AdminEditProductForm = ({ productId, getProductData, handleSubmit }) => {
  const [formData, setFormData] = useState({
    productName: '',
    productDescription: '',
    productPrice: 0,
  });
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductData(productId);
      setFormData({
        productName: data.name,
        productDescription: data.description,
        productPrice: data.price,
      });
    };
    fetchData();
  }, [productId, getProductData]);

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
    <Form.Group controlId="productName">
      <Form.Label>Name</Form.Label>
      <Form.Control
        type="text"
        name="productName"
        value={formData.productName}
        onChange={handleChange}
        required
      />
      <Form.Control.Feedback type="invalid">
        Please provide a product name.
      </Form.Control.Feedback>
    </Form.Group>

    <Form.Group controlId="productDescription">
      <Form.Label>Description</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        name="productDescription"
        value={formData.productDescription}
        onChange={handleChange}
        required
      />
      <Form.Control.Feedback type="invalid">
        Please provide a product description.
      </Form.Control.Feedback>
    </Form.Group>

    <Form.Group controlId="productPrice">
      <Form.Label>Description</Form.Label>
      <Form.Control
        rows={3}
        name="productPrice"
        value={formData.productPrice}
        onChange={handleChange}
        required
      />
      <Form.Control.Feedback type="invalid">
        Please provide a product price.
      </Form.Control.Feedback>
    </Form.Group>

    <Button className='m-2' variant="primary" type="submit">
      Save Changes
    </Button>
    <Button className='m-2' variant="danger" as={Link} to="/admin/products">
      Close
    </Button>
  </Form>
  )
}

export default AdminEditProductForm