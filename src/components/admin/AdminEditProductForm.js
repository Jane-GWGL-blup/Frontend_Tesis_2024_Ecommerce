import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const AdminEditProductForm = ({ productId, getProductData, handleSubmit }) => {
  const [formData, setFormData] = useState({
    productName: '',
    productDescription: '',
    productPrice: 0,
    productStock: 0,
    productImage: null,
  });

  const [initialData, setInitialData] = useState({});
  const [previewImage, setPreviewImage] = useState(null);
  const [validated, setValidated] = useState(false);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductData(productId);
      setFormData({
        productName: data.name,
        productDescription: data.description,
        productPrice: data.price,
        productStock: data.stock,
        productImage: null,
      });
      setInitialData({
        productName: data.name,
        productDescription: data.description,
        productPrice: data.price,
        productStock: data.stock,
        productImage: data.image,
      });
      if (data.image) {
        setPreviewImage(data.image);
      }
    };
    fetchData();
  }, [productId, getProductData]);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      productImage: file,
    });
    setPreviewImage(URL.createObjectURL(file));
    setIsChanged(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Check if the changed field is different from initial data
    if (name === 'productPrice' || name === 'productStock') {
      if (parseFloat(value) !== parseFloat(initialData[name])) {
        setIsChanged(true);
      }
    } else if (value !== initialData[name]) {
      setIsChanged(true);
    }
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
    <Form noValidate validated={validated} onSubmit={onSubmit} className='form-admin'>
      <div className='row'>
        <div className='col-6'>
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
            <Form.Label>Price</Form.Label>
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
        </div>
        <div className='col-4'>
          <Form.Group controlId="productStock">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              rows={3}
              name="productStock"
              value={formData.productStock}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a product stock.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="productImage">
            <Form.Label>Product Image</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required={!previewImage}
            />
            {previewImage && <img src={previewImage} alt="Product Preview" style={{ maxWidth: '200px', marginTop: '10px' }} />}
            <Form.Control.Feedback type="invalid">
              Please provide a product image.
            </Form.Control.Feedback>
          </Form.Group>
        </div>

        <div className='button-container'>
            <Button className='m-2 button-save-admin' type="submit" disabled={!isChanged}>
              Save
            </Button>
            <Button className='m-2 button-close-admin' variant="danger" as={Link} to="/admin/products">
              Close
            </Button>
        </div>
{/*         <div className='row'>
          <div className='col'>
            <Button className='m-2 button-save-admin' type="submit" disabled={!isChanged}>
              Save
            </Button>
          </div>
          <div className='col'>
            <Button className='m-2 button-close-form-admin' variant="danger" as={Link} to="/admin/products">
              Close
            </Button>
          </div>
        </div> */}

      </div>
    </Form>
  )
}

export default AdminEditProductForm


{/* <div className='col'>
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
        </div> */}