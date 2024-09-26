import React, { useState } from 'react';
/* import RegisterForm from '../../components/auth/RegisterForm'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import AlertModal from '../../components/common/modals/AlertModal'; */
import { AlertModal, RegisterForm } from '../../components';
import { registerUser } from '../../services/AuthService';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Para validación
  const [validated, setValidated] = useState(false);
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  // Para el modal de alerta
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Limpiar los errores específicos al cambiar el valor del campo
    if (name === 'name') setNameError('');
    if (name === 'email') setEmailError('');
    if (name === 'password') setPasswordError('');
    if (name === 'confirmPassword') setConfirmPasswordError('');
  };



  const handleSubmit = async (e) => {

    e.preventDefault();
    e.stopPropagation();

    const passwordRegex = /^(?=.*[@*/-])[\w@*/-]{8,20}$/;
    let hasError = false;

    // Validar name
    if (!formData.name) {
      setNameError('Please provide a name.');
      hasError = true;
    }

    // Validar email
    if (!formData.email) {
      setEmailError('Please provide an email.');
      hasError = true;
    }

    // Validar contraseña
    if (!formData.password) {
      setPasswordError('Please provide a password.');
      hasError = true;
    } else if (!passwordRegex.test(formData.password)) {
      setPasswordError('The password must be between 8 and 20 characters and contain at least one of the following signs: @, *, /, -');
      hasError = true;
    }

    // Validar confirmación de contraseña
    if (!formData.confirmPassword) {
      setConfirmPasswordError('Please provide a confirm password.');
      hasError = true;
    } else if (formData.password !== formData.confirmPassword) {
      setModalMessage('Passwords do not match');
      setShowModal(true);
      hasError = true;
    }

    if (hasError) {
      setValidated(false);
      return;
    }

    setValidated(true);

    // Llamar a la API para registrar el usuario
    try {
      const response = await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword
      });
      console.log('User registered:', response);
      // Guardar el token si es necesario
      localStorage.setItem('token', response.token);
      // Redirigir o mostrar mensaje de éxito
      setModalMessage('Registration successful!');
      setShowModal(true);
      // Redirigir o hacer lo que necesites aquí
    } catch (error) {
      console.error("Error details:", error.response.data); // Esto puede darte más información sobre el error


      // Manejar diferentes tipos de errores
      if (error.response) {
        // Error de respuesta del servidor
        setModalMessage(error.response.data.message || 'Error registering user. Please try again.');
      } else if (error.request) {
        // No se recibió respuesta
        setModalMessage('No response from the server. Please check your connection.');
      } else {
        // Algo salió mal al configurar la solicitud
        setModalMessage('Error setting up the request. Please try again.');
      }

      setShowModal(true);
    }

    console.log('Datos del formulario:', formData);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <RegisterForm
        validated={validated}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        nameError={nameError}
        emailError={emailError}
        passwordError={passwordError}
        confirmPasswordError={confirmPasswordError}
      />
      <AlertModal
        show={showModal}
        handleClose={handleCloseModal}
        title='Error en el registro'
        message={modalMessage}
      />
    </div>
  );
}

export default RegisterPage;
// Validar la contraseña con una expresión regular
// const passwordRegex = /^(?=.*[@*/-])[\w@*/-]{8,20}$/;
/* if (!passwordRegex.test(formData.password)) {
   setModalMessage('La contraseña debe tener entre 8 y 20 caracteres y contener al menos uno de los siguientes signos: @, *, /, -');
   setShowModal(true);
   return; 
 }*/