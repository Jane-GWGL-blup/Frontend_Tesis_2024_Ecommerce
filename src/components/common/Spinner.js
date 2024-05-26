import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingComponent  = ({children}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de una operación asíncrona
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <Spinner animation="border" role="status">
          </Spinner>
        </div>
      ) : (
        <div>
          {/* Contenido cuando la carga ha finalizado */}
          {children}
        </div>
      )}
    </div>
  );
};

export default LoadingComponent ;
