import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getDiscountById, updateDiscount } from '../../services/DiscountService';
import { AdminDiscountForm } from '../../components';

const DiscountEditPage = () => {
  const { id } = useParams(); // Obtener el ID de la URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    code: '',
    description: '',
    percentage: 0,
    startDate: '',
    endDate: ''
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDiscount = async () => {
      try {
        const discount = await getDiscountById(id);
        setFormData({
          code: discount.code,
          description: discount.description,
          percentage: discount.percentage,
          startDate: new Date(discount.startDate).toISOString().slice(0, 10), // Formato YYYY-MM-DD
          endDate: new Date(discount.endDate).toISOString().slice(0, 10) // Formato YYYY-MM-DD
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching discount:', error);
        setError('Error fetching discount');
        setLoading(false);
      }
    };

    fetchDiscount();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      await updateDiscount(id, {
        ...formData,
        percentage: parseFloat(formData.percentage, 10), // Asegúrate de que sea un float
        startDate: new Date(formData.startDate).toISOString(),
        endDate: new Date(formData.endDate).toISOString(),
      });
      navigate('/admin/discounts'); // Redirigir a la lista de descuentos después de actualizar
    } catch (error) {
      console.error('Error updating discount:', error);
      alert('Error updating discount');
    }
  };

  if (loading) {
    return <p>Loading discount details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Edit Discount</h2>
      <div className='divider-admin'/>
      <AdminDiscountForm
        discountData={formData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default DiscountEditPage;