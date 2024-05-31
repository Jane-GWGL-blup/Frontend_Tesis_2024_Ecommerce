import React, { useState } from 'react';
import RegisterForm from '../../components/auth/RegisterForm'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import AlertModal from '../../components/common/AlertModal';

const RegisterPage = () => {
  const [formData, setFormData] = useState(
    {
      email: '',
      password: '',
      confirmPassword: ''
    }
  );

  //Para validación
  const [validated, setValidated] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  //Para el modal de alerta
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    
    e.preventDefault();
// Validar la contraseña con una expresión regular
    const passwordRegex = /^(?=.*[@*/-])[\w@*/-]{8,20}$/;
    if (!passwordRegex.test(formData.password)) {
      setPasswordError('La contraseña debe tener entre 8 y 20 caracteres y contener al menos uno de los siguientes signos: @, *, /, -');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setModalMessage('Passwords are not the same.');
      setShowModal(true);
      /* alert('Passwords do not match'); */
      return;
    }
    if (form.checkValidity() === false) {
      e.stopPropagation();
      return;
    }

    setValidated(true);
    setPasswordError('');
    // Aquí podrías manejar el envío del formulario, por ejemplo, enviar los datos a una API
    console.log('Datos del formulario:', formData);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <Header />
      <RegisterForm
        validated={validated}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        passwordError={passwordError} // Pasar el mensaje de error de contraseña al componente del formulario
      />
      <Footer />
      <AlertModal
        show={showModal}
        handleClose={handleCloseModal}
        title='Register error '
        message={modalMessage}
      />
    </div>
  )
}

export default RegisterPage