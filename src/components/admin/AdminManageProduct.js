import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Badge, Table, Button, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil, faPlus } from '@fortawesome/free-solid-svg-icons'; // Importar los iconos que necesites
import '../../styles/components/admin.css'

const AdminManageProduct = () => {

  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', description: 'Description 1', price: 2.50, stock: 2 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 3.50, stock: 5 },
    // Agrega más categorías según sea necesario
  ]);

  const [selectedProducts, setSelectedProducts] = useState([]);
  const navigate = useNavigate();

  const handleCheckboxChange = (productId) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(productId)
        ? prevSelected.filter((id) => id !== productId)
        : [...prevSelected, productId]
    );
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      const allProductIds = products.map((product) => product.id);
      setSelectedProducts(allProductIds);
    } else {
      setSelectedProducts([]);
    }


  };

  const handleRowClick = (productId) => {
    navigate(`/admin/products/details/${productId}`);
  };

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center'>
        <div/>
        <Button as={Link} to="/admin/products/create" className='add-button-admin'>
          <FontAwesomeIcon icon={faPlus} className='mx-2' />
          ADD PRODUCT
        </Button>
      </div>
      {/* muestra el boton de eliminar y cuantos se han seleccionado */}
      {selectedProducts.length > 0 && (
        <div className="selected-products-toolbar">
          <span>{selectedProducts.length} item(s) selected</span>
          <Link to={"#"} className='link-action'>
            <FontAwesomeIcon icon={faTrash} className="px-2 color-icon-delete" />
            <span className='color-delete-admin'>Delete</span>
          </Link>      
          </div>
      )}
      <Table responsive hover className='product-table'>
        <thead>
          <tr>
            <th>
              <Form.Check
                type="checkbox"
                onChange={(e) => handleSelectAll(e.target.checked)}
              />
            </th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Edit </th>
            {/* <th>Delete</th> */}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} >
              <td>
                <Form.Check
                  type="checkbox"
                  checked={selectedProducts.includes(product.id)}
                  onChange={() => handleCheckboxChange(product.id)}
                />
              </td>
              <td onClick={() => handleRowClick(product.id)}>{product.name}</td>
              <td onClick={() => handleRowClick(product.id)}>{product.description}</td>
              <td onClick={() => handleRowClick(product.id)}>{product.price}</td>
              <td onClick={() => handleRowClick(product.id)}>{product.stock}</td>
              <td>
                <Link to={`/admin/products/edit/${product.id}`}>
                  <FontAwesomeIcon icon={faPencil} className="px-2 color-icon-edit" />
                </Link>
              </td>
{/*               <td>
                <Link to={"#"}>
                  <FontAwesomeIcon icon={faTrash} className="px-2 color-icon-delete" />
                </Link>
              </td> */}
            </tr>
          ))}
        </tbody>

      </Table>
    </div>

  )
}

export default AdminManageProduct