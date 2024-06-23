import React, { useState } from 'react';
/* import RegisterForm from '../../components/auth/RegisterForm'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import AlertModal from '../../components/common/modals/AlertModal'; */
import { AlertModal, Footer, Header, RegisterForm } from '../../components';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Para validación
  const [validated, setValidated] = useState(false);
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
    if (name === 'email') setEmailError('');
    if (name === 'password') setPasswordError('');
    if (name === 'confirmPassword') setConfirmPasswordError('');
  };

  

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    e.stopPropagation();

    const passwordRegex = /^(?=.*[@*/-])[\w@*/-]{8,20}$/;
    let hasError = false;

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
    // Aquí podrías manejar el envío del formulario, por ejemplo, enviar los datos a una API
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