import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../services/UserService";
import {AdminCreateUserForm} from '../../components'

const UserCreatePage = () =>{
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        password:'',
        role:''
    });
    const [validated,setValidated] = useState(false)
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setValidated(true)

        //Verificar si los campos estan llenos
        if(!formData.name || !formData.email || !formData.password || !formData.role){
            return;
        }
        try {
            await createUser(formData)
            alert('User created successfully!')
            navigate('/admin/users')
        } catch (error) {
            console.error('error creating user:',error)
            alert('Error creating user')
        }
    }

    return (
        <div>
            <h2>Create User</h2>
            <div className='divider-admin'/>
            <AdminCreateUserForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            validated={validated}
            />
        </div>
    );
};

export default UserCreatePage;