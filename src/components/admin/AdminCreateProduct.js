import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { createProduct } from '../../services/ProductService';


const AdminCreateProduct = ({ token }) => {
  const navigate = useNavigate();
  const [formData,setFormData] = useState({
    productName:'',
    productDescription:'',
    productPrice:'',
    productStock:'',
    productImage:null
  });

  const [validated,setValidated] = useState(false)
  const [previewImage,setPreviewImage] = useState(null)

  const handleImageChange= (e) =>{
    const file = e.target.files[0];
    setFormData({...formData,productImage:file})
  }

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]:value,
    })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    e.stopPropagation();
    if(!e.currentTarget.checkValidity()){
      setValidated(true)
      return;
    }

    const productData = new formData();//para manejar el envio de imagenes
    productData.append('name',formData.productName);
    productData.append('description', formData.productDescription);
    productData.append('price',formData.productPrice);
    productData.append('stock',formData.productStock);
    if (formData.productImage){
      productData.append('image',formData.productImage)
    }

    try {
      const response = await createProduct(productData,token);
      console.log('product created',response)
      navigate('admin/products')
    } catch (error) {
      console.error('Error creating product: ',error)
    }
  }

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
    <Form noValidate validated={validated} onSubmit={handleSubmit} className='form-admin'>
      <div className='row'>
        <div className='col'>
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
          <Form.Group controlId="productStock">
            <Form.Label>Product Stock</Form.Label>
            <Form.Control
              type="number"
              name="productStock"
              value={formData.productStock}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a product stock.
            </Form.Control.Feedback>
          </Form.Group>
        </div>
        <div className='col'>
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
        </div>
      </div>

      <Button className='m-2' variant="primary" type="submit">
        Submit
      </Button>
      <Button className='m-2' variant="danger" onClick={() => navigate('/admin/products')}>
        Close
      </Button>
    </Form>
  );
};

export default AdminCreateProduct;

