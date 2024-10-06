import React,{useEffect,useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, updateProduct } from '../../services/ProductService'; // Importar el servicio
import { AdminEditProductForm } from '../../components';

const ProductEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    categoryId: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const product = await getProductById(id);
        setFormData({
          name: product.name || '',
          description: product.description || '',
          price: product.price || '',
          stock: product.stock || '',
          categoryId: product.categoryId || '',
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product data:', error);
        setLoading(false);
      }
    };
    fetchProductData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataWithConvertesValues = {
        ...formData,
        price: parseInt(formData.price,10),
        stock: parseInt(formData.stock,10),
        categoryId: parseInt(formData.categoryId,10)
      }
      await updateProduct(id, formDataWithConvertesValues);
      navigate('/admin/products'); // Redirigir a la lista de productos después de actualizar
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Error updating product');
    }
  };

  if (loading) {
    return <p>Loading product data...</p>;
  }

  return (
    <div>
      <h2>Edit Product</h2>
      <div className='divider-admin'/>
      <AdminEditProductForm 
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default ProductEditPage;
