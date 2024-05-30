/* 30/05/24 */
/* ProductList para agrupar y mostrar listas de productos en secciones. */
import React from 'react';
import ProductCard from './ProductCard';
import '../../styles/components/product.css';

const ProductList = ({ products, title }) => {
  return (
    <section className="product-list">
      <h2>{title}</h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
