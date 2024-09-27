import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/AuthService';
/* import LoginForm from '../../components/auth/LoginForm';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import AlertModal from '../../components/common/modals/AlertModal'; */
import {AlertModal, Footer, Header, LoginForm} from '../../components';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  //Para el modal de alerta
  const navigate = useNavigate()
  const [emailError,setEmailError] = useState('')
  const [passwordError,setPasswordError] = useState('')
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    //Limpiar los errores especificos cuando el usuario comienza a escribir
    if (name=== 'email') setEmailError('')
    if (name === 'password') setPasswordError('')
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    let hasError = false
    //validar correo 
    if (!formData.email) {
      setModalMessage('Please provide an email.');
      setShowModal(true);
    }
    //validar contraseña
    if (!formData.password) {
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
      //guardar el token en el local storage
      localStorage.setItem('token',response.token)

      //redirigir a la pagina principaldespues del login
      navigate('/')
    } catch (error) {
      console.log("Error logging in:", error.response.data);
      //manejar el error del loggin
      if (error.response) {
        setModalMessage(error.response.data.message || "Error logging in. Please try again")
      }else{
        setModalMessage('No response from the server. Please try againt.')
      }
      setShowModal(true)
    }
    // Aquí podrías manejar el envío del formulario, por ejemplo, enviar los datos a una API
    console.log('Datos del formulario:', formData);
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
      title='Login error '
      message={modalMessage}
      />
    </div>
  )
}

export default LoginPage