import React,{useEffect,useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus,faPencil } from '@fortawesome/free-solid-svg-icons'
import { getAllUsers,deleteUser,updateUserRole } from "../../services/UserService";
import { Table,Button,Form } from "react-bootstrap";
import '../../styles/components/admin.css'

const AdminManageUsers = () =>{
    const [users,setUsers] = useState([])
    const [filteredUsers,setFilteredUsers] = useState([])
    const [searchTerm,setSearchTerm] = useState("")
    const [filterRole, setFilterRole] = useState("")


    useEffect(()=>{
        const fetchUsers = async () => {
            try {
                const userList = await getAllUsers();
                setUsers(userList)
                setFilteredUsers(userList)
            } catch (error) {
                console.error('error fetching users:',error)
            }
        }
        fetchUsers();
    },[])

    //funcion para manejar el cambio de busqueda
    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
        filterUsers(e.target.value, filterRole)
    }

    //funcion para manejar el cambio de filtro de rol
    const handleRoleFilter = (e) => {
        setFilterRole(e.target.value);
        filterUsers(searchTerm, e.target.value)
    }
    // Filtrar usuarios basados en búsqueda y rol
    const filterUsers = (searchTerm, roleFilter) => {
        let updatedUsers = users;

        // Filtrar por término de búsqueda
        if (searchTerm) {
        updatedUsers = updatedUsers.filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
        }

        // Filtrar por rol si se selecciona uno
        if (roleFilter) {
        updatedUsers = updatedUsers.filter((user) => user.role === roleFilter);
        }

        setFilteredUsers(updatedUsers);
    };

    const handleDelete = async (userId) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
          try {
            await deleteUser(userId);
            setUsers(users.filter((user) => user.id !== userId));
            setFilteredUsers(filteredUsers.filter((user) => user.id !== userId));
            alert("User deleted successfully!");
          } catch (error) {
            console.error("Error deleting user: ", error);
            alert("Error deleting user");
          }
        }
    };

    // Cambiar el rol del usuario
    const handleRoleChange = async (userId, newRole) => {
        try {
        await updateUserRole(userId, newRole);
        const updatedUsers = users.map((user) =>
            user.id === userId ? { ...user, role: newRole } : user
        );
        setUsers(updatedUsers);
        setFilteredUsers(updatedUsers);
        alert("User role updated successfully!");
        } catch (error) {
        console.error("Error updating user role:", error);
        alert("Error updating user role");
        }
    };

    return (
        <div>
            <div className='d-flex justify-content-between align-items-center'>
                <div/>
                <Button as={Link} to="/admin/users/create" className='add-button-admin'>
                <FontAwesomeIcon icon={faPlus} className='mx-2' />
                ADD USER
                </Button>
            </div>
            {/* Búsqueda y Filtro */}
            <div className="d-flex my-3">
                <Form.Control
                type="text"
                placeholder="Search by name or email"
                value={searchTerm}
                onChange={handleSearch}
                className="me-2"
                />
                <Form.Select value={filterRole} onChange={handleRoleFilter}>
                <option value="">Filter by Role</option>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                </Form.Select>
            </div>
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
          {filteredUsers.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Form.Select
                  value={user.role}
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                >
                  <option value="USER">USER</option>
                  <option value="ADMIN">ADMIN</option>
                </Form.Select>
              </td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminManageUsers
