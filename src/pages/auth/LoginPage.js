import React, { useState } from 'react';
import LoginForm from '../../components/auth/LoginForm';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

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
      alert('Please fill in all fields');
      return;
    }
    // Aquí podrías manejar el envío del formulario, por ejemplo, enviar los datos a una API
    console.log('Datos del formulario:', formData);
  };

  return (
    <div>
      <Header/>
      <LoginForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
      <Footer/>
    </div>
  )
}

export default LoginPage