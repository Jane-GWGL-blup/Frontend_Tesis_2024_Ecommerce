// src/pages/ProductDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProducts, getProductBySlug } from '../../services/ProductService'; // Usamos la función para obtener todos los productos
import { ProductDetail } from '../../components';

const ProductDetailPage = () => {
  const { productName } = useParams(); // Obtenemos el slug de la URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductBySlug(productName); // Utilizamos el slug para obtener los detalles del producto
        setProduct(productData);
      } catch (error) {
        console.error(error); // Agrega esto para ver el error específico
        setError('No se pudo encontrar el producto.');
      }
    };

    fetchProduct();
  }, [productName]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="product-detail-page">
      <h1>Product Details</h1>
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductDetailPage;
