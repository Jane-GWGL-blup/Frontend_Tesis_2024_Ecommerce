import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button} from 'react-bootstrap';
import '../../styles/components/auth.css'

const LoginForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <Container className='mt-5'>
      <div className='auth-container'>
        <h1>Login</h1>
        {/*Form for Register */}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange} 
            placeholder='Enter email: example@gmail.com'/>
          </Form.Group>
          <Form.Group controlId="formPassword" className='mt-2'>
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type='password' 
            name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='Enter password' className='mt-2'/>
          </Form.Group>
            <div className='py-4'>
                <Button variant='primary' type='submit'>
                    Login
                </Button>
            </div>
            <Link to="/register" className='back-form'>Not got a My Account? Join now!</Link>
            <Link to="/forgot-password" className='back-form'>Forgot password?</Link>

        </Form>
      </div>
  </Container>
  )
}

export default LoginForm