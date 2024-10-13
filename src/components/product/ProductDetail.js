import React, { useState } from 'react'
import { Accordion, Button } from 'react-bootstrap';
import { LoadingComponent } from '../../components';
import { addItemToCart } from '../../services/CartService';


const ProductDetail = ({ product }) => {

    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
    const [isZoomed, setIsZoomed] = useState(false);
    const [buttonColor, setButtonColor] = useState('var(--color-dark-green)'); // Color inicial del botón (verde)
    const [message, setMessage] = useState(''); // Para el mensaje de éxito


    const handleMouseEnter = () => {
        setIsZoomed(true);
    };

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setZoomPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setIsZoomed(false);
    };

    const handleButtonClick = async () => {
        try {
            setButtonColor('var(--color-emerald-green)'); // Cambiar a un verde diferente al hacer clic
            
            // Asegúrate de que product.id esté disponible
            console.log('Agregando al carrito:', { productId: product.id, quantity: 1 });
            
            await addItemToCart(product.id, 1); // Agrega el producto al carrito
            
            setMessage('Producto agregado al carrito!'); // Mensaje de éxito
    
            // Restaurar el color original después de 1 segundo (1000 ms)
            setTimeout(() => {
                setButtonColor('var(--color-dark-green)'); // Volver al color original
                setMessage(''); // Limpiar el mensaje
            }, 1000);
        } catch (error) {
            console.error('Error adding product to cart:', error);
            setMessage('Error al agregar el producto al carrito.');
        }
    };

    if (!product) return <LoadingComponent />
    return (
        <div className="detail-product container">
            <div className='row'>
                <div className='col-md-6 d-flex align-items-center justify-content-center'>
                    <div
                        className="detail-product-image-wrapper"
                        onMouseEnter={handleMouseEnter}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* <img src={imageUrl} alt={name} /> */}
                        <img
                            src='https://belcorpperu.vtexassets.com/arquivos/ids/272578-600-auto?v=638242833182930000&width=600&height=auto&aspect=true'
                            alt={product.name}
                            className={`detail-product-image ${isZoomed ? 'zoomed' : ''}`}
                            style={{
                                transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`
                            }}
                        />
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="detail-product__info">
                        <h2>{product.name}</h2>
                        <div className='divider-detail-product' />
                        <p className="detail-product__price">${product.price.toFixed(2)}</p>
                        <Button
                            className="detail-product__add-to-cart"
                            style={{ backgroundColor: buttonColor, borderColor: buttonColor }} // Cambia el color del botón
                            onClick={handleButtonClick} // Maneja el clic en el botón
                        >
                            Add to Cart
                        </Button>
                        {message && <p className="cart-message">{message}</p>} {/* Mensaje de éxito */}

                    </div>
                </div>
            </div>

            <div className='row'>
                {/* Accordion for the description */}
                <Accordion className='detail-product-accordion__description'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <h3>Description</h3>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p className="detail-product__description">{product.description}</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}

export default ProductDetail;