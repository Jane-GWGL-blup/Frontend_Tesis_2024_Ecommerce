import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Table, Button, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus,faPencil } from '@fortawesome/free-solid-svg-icons'; // Importar los iconos que necesites
import '../../styles/components/admin.css'
import { deleteProduct, getAllProducts } from '../../services/ProductService'; // Importar el servicio


const AdminManageProduct = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Función para obtener productos
    const fetchProducts = async () => {
      try {
        const productList = await getAllProducts(); // Obtener los productos desde la API
        setProducts(productList); // Actualiza el estado con los productos
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts(); // Llama a la función al montar el componente
  }, []);

  const handleDelete = async (productId) =>{
    if(window.confirm('Are you sure want to delete this product?')){
      try {
        await deleteProduct(productId);
        setProducts(products.filter(product => product.id !== productId));
        alert('Product deleted successfully!')
      } catch (error) {
        console.error('Error deleting product: ',error)
        alert('error deleting product')
      }
    }
  }

  // const handleCheckboxChange = (productId) => {
  //   setSelectedProducts((prevSelected) =>
  //     prevSelected.includes(productId)
  //       ? prevSelected.filter((id) => id !== productId)
  //       : [...prevSelected, productId]
  //   );
  // };

  // const handleSelectAll = (checked) => {
  //   if (checked) {
  //     const allProductIds = products.map((product) => product.id);
  //     setSelectedProducts(allProductIds);
  //   } else {
  //     setSelectedProducts([]);
  //   }
  // };

  // const handleRowClick = (productId) => {
  //   navigate(`/admin/products/edit/${productId}`);
  // };

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
      {/* {selectedProducts.length > 0 && (
        <div className="selected-products-toolbar">
          <span>{selectedProducts.length} item(s) selected</span>
          <Link to={"#"} className='link-action'>
            <FontAwesomeIcon icon={faTrash} className="px-2 color-icon-delete" />
            <span className='color-delete-admin'>Delete</span>
          </Link>      
          </div>
      )} */}
      <Table responsive hover className='product-table'>
        <thead>
          <tr>
            {/* <th>
              <Form.Check
                type="checkbox"
                onChange={(e) => handleSelectAll(e.target.checked)}
              />
            </th> */}
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Edit </th> 
            <th>Delete</th> 
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} >
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.category ? product.category.name : 'No category'}</td>
              {/* <td>
                <Form.Check
                  type="checkbox"
                  checked={selectedProducts.includes(product.id)}
                  onChange={() => handleCheckboxChange(product.id)}
                />
              </td>
              <td onClick={() => handleRowClick(product.id)}>{product.name}</td>
              <td onClick={() => handleRowClick(product.id)}>{product.description}</td>
              <td onClick={() => handleRowClick(product.id)}>{product.price}</td>
              <td onClick={() => handleRowClick(product.id)}>{product.stock}</td> */}
               <td>
                <Link to={`/admin/products/edit/${product.id}`}>
                  <FontAwesomeIcon icon={faPencil} className="px-2 color-icon-edit" />
                </Link>
              </td> 
               <td>
                <Link onClick={() => handleDelete(product.id)}>
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