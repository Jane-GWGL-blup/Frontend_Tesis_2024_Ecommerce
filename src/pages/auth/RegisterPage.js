import React, { useState} from 'react';
import RegisterForm from '../../components/auth/RegisterForm'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'

const RegisterPage = () => {
  const [formData, setFormData] = useState(
    {
      email: '',
      password: '',
      confirmPassword:''
    }
  );

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Aquí podrías manejar el envío del formulario, por ejemplo, enviar los datos a una API
    console.log('Datos del formulario:', formData);
  };

  return (
    <div>
      <Header/>
      <RegisterForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <Footer/>
    </div>
  )
}

export default RegisterPage