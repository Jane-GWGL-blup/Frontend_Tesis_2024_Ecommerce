import React from 'react'
import { LoadingComponent } from '../../components';

const ProductDetail = ({ product }) => {
    if (!product) return <LoadingComponent />
    return (
        <div className="detail-product">
            <div className='row'>
                <div className='col'>
                    <div className="detail-product__image">
                        {/* <img src={imageUrl} alt={name} /> */}
                        <span>imagen</span>
                    </div>
                </div>
                <div className='col'>
                    <div className="detail-product__info">
                        <h2>{product.name}</h2>
                        <p className="detail-product__price">${product.price.toFixed(2)}</p>
                        <p className="detail-product__description">{product.description}</p>
                        <button className="detail-product__add-to-cart">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;