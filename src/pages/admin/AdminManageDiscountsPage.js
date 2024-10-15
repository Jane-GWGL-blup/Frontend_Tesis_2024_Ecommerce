import React, { useEffect, useState } from 'react';
import { getAllDiscounts, deleteDiscount } from '../../services/DiscountService';
import AdminManageDiscounts from '../../components/admin/AdminManageDiscounts';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AdminManageDiscountsPage = () => {
    const [discounts, setDiscounts] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchDiscounts = async () => {
            try {
                const discountList = await getAllDiscounts();
                setDiscounts(discountList);
            } catch (error) {
                console.error('Error fetching discounts:', error);
            }
        };

        fetchDiscounts();
    }, []);

    const handleDeleteDiscount = async (discountId) => {
        if (window.confirm('Are you sure you want to delete this discount?')) {
            try {
                await deleteDiscount(discountId);
                setDiscounts(discounts.filter(discount => discount.id !== discountId));
                alert('Discount deleted successfully!');
            } catch (error) {
                console.error('Error deleting discount:', error);
                alert('Error deleting discount');
            }
        }
    };
    // Nueva función para manejar la creación de un descuento
    const handleCreateDiscount = () => {
        navigate('/admin/discounts/create'); // Navegar a la página de creación de descuentos
    }
    const handleEditDiscount = (discountId) => {
        navigate(`/admin/discounts/edit/${discountId}`);
    }
    return (
        <div>
            <div className='d-flex justify-content-between align-items-center'>
                <h2>Manage Discounts</h2>
                <Button onClick={handleCreateDiscount} className='add-button-admin'>
                    Add Discount
                </Button>
            </div>
            <AdminManageDiscounts discounts={discounts} handleEditDiscount={handleEditDiscount} handleDeleteDiscount={handleDeleteDiscount} />
        </div>
    );
};

export default AdminManageDiscountsPage;