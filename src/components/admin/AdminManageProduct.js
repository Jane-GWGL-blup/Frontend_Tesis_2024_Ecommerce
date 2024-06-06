import React from 'react'
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap'

const AdminManageProduct = () => {
  return (
    <div>
      <div>
        <Button as={Link} to="/admin-products-create" variant='outline-primary'> Agregar producto </Button>
      </div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {Array.from({ length: 5 }).map((_, index) => (
              <th key={index}>Table heading</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            {Array.from({ length: 5 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
        </tbody>
      </Table>
    </div>

  )
}

export default AdminManageProduct