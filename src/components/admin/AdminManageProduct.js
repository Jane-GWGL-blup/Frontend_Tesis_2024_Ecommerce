import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons'; // Importar los iconos que necesites
import '../../styles/components/admin.css'

const AdminManageProduct = () => {

  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', description: 'Description 1', price: 2.50 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 3.50 },
    // Agrega más categorías según sea necesario
  ]);

  return (
    <div>
      <div>
        <Button as={Link} to="/admin/products/create" variant='outline-primary'> Add product </Button>
      </div>
      <Table responsive>
      <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Edit </th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <Link to={`/admin/products/edit/${product.id}`}>
                  <FontAwesomeIcon icon={faPencil} className="px-2 color-icon-edit" />
                </Link>
              </td>
              <td>
                <Link to={"#"}>
                  <FontAwesomeIcon icon={faTrash} className="px-2 color-icon-delete" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>

  )
}

export default AdminManageProduct