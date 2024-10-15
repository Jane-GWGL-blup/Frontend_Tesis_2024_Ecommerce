import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AdminDiscountForm = ({ discountData, handleSubmit }) => {
    const [formData, setFormData] = useState({
        code: '',
        description: '',
        percentage: 0,
        startDate: '',
        endDate: ''
    });

    useEffect(() => {
        if (discountData) {
            setFormData(discountData);
        }
    }, [discountData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(formData);  // Llama a handleSubmit desde el componente padre
    };

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group controlId="discountCode">
                <Form.Label>Code</Form.Label>
                <Form.Control
                    type="text"
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="discountDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="discountPercentage">
                <Form.Label>Percentage</Form.Label>
                <Form.Control
                    type="number"
                    name="percentage"
                    value={formData.percentage}
                    onChange={handleChange}
                    min="0"
                    max="100"
                    step="0.01"
                    required
                />
            </Form.Group>

            <Form.Group controlId="startDate">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="endDate">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
                Save Discount
            </Button>
        </Form>
    );
};

export default AdminDiscountForm;