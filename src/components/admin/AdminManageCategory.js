import React from 'react'
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons'; // Importar los iconos que necesites
import '../../styles/components/admin.css'

const AdminManageCategory = () => {
  return (
    <div>
      <div>
        <Button as={Link} to="/admin/categories/create" variant='outline-primary'> Add category </Button>
      </div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            {Array.from({ length: 2 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
            <td>
              <Link to={"#"}>
                <FontAwesomeIcon icon={faPencil} className="px-2 color-icon-edit" />
              </Link>
            </td>
            <td>
              <Link to={"#"}>
                <FontAwesomeIcon icon={faTrash} className="px-2 color-icon-delete" />
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>

  )
}

export default AdminManageCategory