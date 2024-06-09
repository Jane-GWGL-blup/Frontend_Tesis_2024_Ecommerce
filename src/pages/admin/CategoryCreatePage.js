import React, { useState } from 'react';
/* import AdminProductForm from '../../components/admin/AdminProductForm';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminSidebar from '../../components/admin/AdminSidebar'; */
/* import {AdminHeader, AdminSidebar, AdminProductForm}  from '../../components';
 */
import {  AdminCategoryForm } from '../../components';



const CategoryCreatePage = () => {
  const [formData, setFormData] = useState({
    categoryName: '',
    categoryDescription: '',
  });
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
    // Aquí iría la lógica para enviar el formulario a la API, incluyendo el formData con la imagen
    console.log('Form Data:', formData);
  };
  // Estado local para la simulación de usuario
  const [user, setUser] = useState({
    id: 1,
    username: 'AdminUser',
    email: 'admin@example.com',
    role: 'admin',
    isLoggedIn: true
  });

  // Simulando el cierre de sesión
  const logout = () => {
    setUser(null);
  }

  if (!user) {
    return <div>Please log in.</div>;
  }

  return (
    <div>
      <h1>Create Category</h1>
      <AdminCategoryForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        validated={validated}
      />
    </div>
  );
};

export default CategoryCreatePage