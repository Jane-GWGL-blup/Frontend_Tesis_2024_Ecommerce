import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/AuthService';
import { AlertModal, LoginForm } from '../../components';

const LoginPage = () => {
  //Actualiza el estado de autenticacion
  const { updateAuthStatus } = useContext(UserContext);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate()
  //Para el modal de alerta
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


  const handleLogin = async (credentials) => {
    const result = await loginUser(credentials); // Asegúrate de manejar el login correctamente
    if (result) {
      const userDataToStore = {
        role: result.role,
        email: result.email,
        name: result.name,
      };

      // Guardar el token y el usuario en localStorage
      localStorage.setItem('userId', result.id);
      localStorage.setItem('token', result.token);
      localStorage.setItem('user', JSON.stringify(userDataToStore));


      // Actualizar el estado de autenticación en el contexto
      updateAuthStatus({
        isAuthenticated: true,
        userData: userDataToStore
      });

      // Mostrar modal de éxito
      setModalTitle('Login Success');
      setModalMessage('You have successfully logged in!');
      setShowModal(true);

      // Redirigir según el rol del usuario después de cerrar el modal
      setTimeout(() => {
        if (userDataToStore.role === 'ADMIN') {
          navigate('/admin/dashboard'); // Redirigir al dashboard de admin
        } else {
          navigate('/'); // Redirigir a la página principal para usuarios normales
        }
      }, 3000); // Redirigir después de 2 segundos (ajusta el tiempo según lo necesites)
    } else {
      console.error('Login failed: Invalid response from server');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let hasError = false
    //validar correo 
    if (!formData.email) {
      setModalTitle('Login error');
      setModalMessage('Please provide an email.');
      setShowModal(true);
      hasError = true;
    }
    //validar contraseña
    if (!formData.password) {
      setModalTitle('Login error');
      setModalMessage('Please provide a password.');
      setShowModal(true);
      hasError = true;
    }

    if (hasError) return;

    try {
      // Llamada al api
      await handleLogin({
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
        if (user.role === 'ADMIN') {
          navigate('/admin/dashboard'); // Redirigir al dashboard de admin
        } else {
          navigate('/'); // Redirigir a la página principal
        }
      } else {
        console.error('User data is not available in localStorage');
      }

    } catch (error) {
      console.log("Error logging in:", error.response.data);
      console.log('Login attempt:', {
        email: formData.email,
      });
      // Manejar el error del login
      if (error.response) {
        setModalMessage(error.response.data.message || "Error logging in. Please try again");
      } else {
        setModalMessage('No response from the server. Please try again.');
      }
      setModalTitle('Login error');
      setShowModal(true);
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