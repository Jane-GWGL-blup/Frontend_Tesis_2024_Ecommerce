import React,{useEffect,useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAllUsers,deleteUser,updateUserRole } from "../../services/UserService";
import { Table,Button } from "react-bootstrap";
import '../../styles/components/admin.css'

const AdminManageUsers = () =>{
    const [users,setUsers] = useState([])
    useEffect(()=>{
        const fetchUsers = async () => {
            try {
                const userList = await getAllUsers();
                setUsers(userList)
            } catch (error) {
                console.error('error fetching users:',error)
            }
        }
        fetchUsers();
    },[])

    const handleDelete = async (userId) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                await deleteUser(userId);
                setUsers(users.filter(user =>user.id !==userId))
                alert('User deleted successfully!')
            } catch (error) {
                console.error('Error deleting user: ',error)
                alert('Error deleting user')
            }
        }
    };
    const handleRoleChange = async (userId, newRole) => {
        try {
            await updateUserRole(userId, newRole);
            const updatedUsers = users.map(user =>
                user.id === userId ? { ...user, role: newRole } : user
            );
            setUsers(updatedUsers);
            alert('User role updated successfully!');
        } catch (error) {
            console.error('Error updating user role:', error);
            alert('Error updating user role');
        }
    };

    return (
        <div>
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <select value={user.role} onChange={(e) => handleRoleChange(user.id, e.target.value)}>
                                    <option value="USER">USER</option>
                                    <option value="ADMIN">ADMIN</option>
                                </select>
                            </td>
                            <td>
                                <Button variant="danger" onClick={() => handleDelete(user.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default AdminManageUsers
