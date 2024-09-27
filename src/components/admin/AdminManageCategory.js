import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons'; // Importar los iconos que necesites
import '../../styles/components/admin.css'
import { getAllCategories } from '../../services/CategoryService'; // Importar el servicio

const AdminManageCategory = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('search');
  const [categories, setCategories] = useState([]);
  /*   const [selectedCategories, setSelectedCategories] = useState([]);
   */
  const [filteredCategories, setFilteredCategories] = useState(categories);


  useEffect(() => {
    // Función para obtener productos
    const fetchCategories = async () => {
      try {
        const categoryList = await getAllCategories(); // Obtener las categorias desde la API
        setCategories(categoryList); // Actualiza el estado con las categorias
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchCategories(); // Llama a la función al montar el componente
  }, []);

  useEffect(() => {
    if (query) {
      const results = categories.filter(category =>
        category.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCategories(results);
    } else {
      setFilteredCategories(categories);
    }
  }, [query, categories]);

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
            <th>Edit </th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredCategories.map((category, index) => (
            <tr key={category.id}>
              <td>{index + 1}</td>
              <td>{category.name}</td>
              <td>{category.description}</td>
              <td>
                <Link to={`/admin/categories/edit/${category.id}`}>
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

export default AdminManageCategory