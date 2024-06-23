import React, { useState } from 'react';
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
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setModalMessage('Please fill in all fields');
      setShowModal(true);
/*       alert('Please fill in all fields');
 */      return;
    }
    // Aquí podrías manejar el envío del formulario, por ejemplo, enviar los datos a una API
    console.log('Datos del formulario:', formData);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <LoginForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
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