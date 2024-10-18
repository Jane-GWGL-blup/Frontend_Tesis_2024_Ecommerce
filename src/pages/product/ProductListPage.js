/* 30/05/24 */
/* ProductListPage, muestra la lista completa de productos. */

import React, { useEffect, useState } from 'react';
import { LoadingComponent, ProductList, SidebarCategoryStore } from '../../components';
import { getAllProducts } from '../../services/ProductService';
import '../../styles/components/productListPage.css'

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Llamada a la API para obtener los productos
    const fetchProducts = async () => {
      try {
        const productList = await getAllProducts();
        setProducts(productList);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div className='product-list-page'>
      <div className="container">
        <h1 className='page-title text-center mb-4'>Explorer our Products</h1>
        <div className='row'>
          <div className='col-md-3'>
            <SidebarCategoryStore />
          </div>
          <div className='col'>
            <ProductList products={products} title="All Products" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListPage;
