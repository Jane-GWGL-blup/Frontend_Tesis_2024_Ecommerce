import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/AuthService';
import { AlertModal, LoginForm } from '../../components';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  //Para el modal de alerta
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    let hasError = false
    //validar correo 
    if (!formData.email) {
      setModalTitle('Login error');
      setModalMessage('Please provide an email.');
      setShowModal(true);
    }
    //validar contraseña
    if (!formData.password) {
      setModalTitle('Login error');
      setModalMessage('Please provide a password.');
      setShowModal(true);
    }

    if (hasError) return;

    try {
      //Llamada al api
      const response = await loginUser({
        email: formData.email,
        password: formData.password
      })
      
      
      /*       // Redirigir según el rol del usuario
            const user = JSON.parse(localStorage.getItem('user'));
            if (user && user.role === 'admin') {
              navigate('/admin/dashboard'); // Redirigir al dashboard de admin
            } else {
              navigate('/'); // Redirigir a la página principal
            } */

      const userString = localStorage.getItem('user');
      if (userString) {
        const user = JSON.parse(userString);
        if (user.role === "ADMIN") {
          navigate('/admin/dashboard'); // Redirigir al dashboard de admin
        } else {
          navigate('/'); //Redirigir a la página principal
        }
      } else {
        console.error('User data is not available in localStorage');
      }
      

    } catch (error) {
      console.log("Error logging in:", error.response.data);
      console.log('Intento de inicio de sesión:', {
        email: formData.email,
      });
      //manejar el error del loggin
      if (error.response) {
        setModalMessage(error.response.data.message || "Error logging in. Please try again")
      } else {
        setModalMessage('No response from the server. Please try againt.')
      }
      setModalTitle('Login error');
      setShowModal(true)
    }

  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <LoginForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}

      />
      <AlertModal
        show={showModal}
        handleClose={handleCloseModal}
        title={modalTitle}
        message={modalMessage}
      />
    </div>
  )
}

export default LoginPage