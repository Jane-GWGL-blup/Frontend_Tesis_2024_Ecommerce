import React, { useEffect,useState } from 'react';
import {Table,Button} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { faTrash, faPlus,faPencil } from '@fortawesome/free-solid-svg-icons'; // Importar los iconos que necesites
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAllDiscounts } from '../../services/DiscountService';


const AdminManageDiscounts = ({ handleEditDiscount,handleDeleteDiscount}) => {
    const [discounts, setDiscounts] = useState([]);
    useEffect(() =>{
        const fetchDiscounts = async () => {
            try {
                const discountsList = await getAllDiscounts()
                setDiscounts(discountsList)
            } catch (error) {
                console.error('Error fetching discounts')
            }
        }
        fetchDiscounts()
    },[])
    
    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Code</th>
                    <th>Description</th>
                    <th>Percentage</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {discounts.map((discount, index) => (
                    <tr key={discount.id}>
                        <td>{index + 1}</td>
                        <td>{discount.code}</td>
                        <td>{discount.description}</td>
                        <td>{discount.percentage}%</td>
                        <td>{new Date(discount.startDate).toLocaleDateString()}</td>
                        <td>{new Date(discount.endDate).toLocaleDateString()}</td>
                        <td>
                            <Button variant="" onClick={() => handleEditDiscount(discount.id)}>
                            <FontAwesomeIcon icon={faPencil} className="px-2 color-icon-edit" />
                            </Button>
                        </td> 
                        <td>
                            
                            <Button variant="danger" onClick={() => handleDeleteDiscount(discount.id)} className="ml-2">Delete</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}
export default AdminManageDiscounts;