import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button} from 'react-bootstrap';

const AdminProductForm = ({ formData, handleChange, handleSubmit, handleImageChange, validated }) => {
  const [previewImage, setPreviewImage] = useState(null);

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="productName">
        <Form.Label>Product Name</Form.Label>
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
        <Form.Label>Product Description</Form.Label>
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
        <Form.Label>Product Price</Form.Label>
        <Form.Control
          type="number"
          name="productPrice"
          value={formData.productPrice}
          onChange={handleChange}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please provide a product price.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="productImage">
        <Form.Label>Product Image</Form.Label>
        <Form.Control
          type="file"
          accept="image/*"
          onChange={(e) => {
            handleImagePreview(e);
            handleImageChange(e);
          }}
          required
        />
        {previewImage && <img src={previewImage} alt="Product Preview" style={{ maxWidth: '200px', marginTop: '10px' }} />}
        <Form.Control.Feedback type="invalid">
          Please provide a product image.
        </Form.Control.Feedback>
      </Form.Group>

      <Button className='m-2' variant="primary" type="submit">
        Submit
      </Button>
      <Button className='m-2' variant="danger" as={Link} to="/admin-products">
        Close
      </Button>
    </Form>
  );
};

export default AdminProductForm;

