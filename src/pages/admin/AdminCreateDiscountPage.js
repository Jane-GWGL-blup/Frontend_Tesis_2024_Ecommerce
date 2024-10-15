import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminDiscountForm from '../../components/admin/AdminDiscountForm';
import { createDiscount } from '../../services/DiscountService';

const AdminCreateDiscountPage = () => {
    const navigate = useNavigate();

    const handleCreateDiscount = async (formData) => {
        try {
            await createDiscount(formData);
            alert('Discount created successfully!');
            navigate('/admin/discounts'); // Navegar de vuelta a la página de gestión de descuentos
        } catch (error) {
            console.error('Error creating discount:', error);
            alert('Error creating discount');
        }
    };

    return (
        <div>
            <h2>Create Discount</h2>
            <AdminDiscountForm handleSubmit={handleCreateDiscount} />
        </div>
    );
};

export default AdminCreateDiscountPage;