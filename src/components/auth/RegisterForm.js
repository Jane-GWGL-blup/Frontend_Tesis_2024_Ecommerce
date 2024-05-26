import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button} from 'react-bootstrap';

const RegisterForm = ({ formData, handleChange, handleSubmit }) => {

  return (
    <Container className='mt-5'>
      <div className='auth-container'>
        <h1>Register</h1>
        {/*Form for Register */}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail" className='mt-2'>
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type='email'
              name="email"
              value={formData.email}
              onChange={handleChange} 
              placeholder='Enter email'/>
          </Form.Group>
          <Form.Group controlId="formPassword" className='mt-2'>
            <Form.Label controlId="formPassword">Password</Form.Label>
            <Form.Control 
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange} 
              placeholder='Enter password'/>
          </Form.Group>
          <Form.Group controlId="formConfirmPassword" className='mt-2'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control 
              type='password'
              name='confirmPassword' 
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder='Enter password again'/>
          </Form.Group>
          <div className='py-4'>
              <Button variant='primary' type='submit'>
                  Register
              </Button>
          </div>
            <Link to="/login" className='back-form'>Go back to login</Link>
        </Form>
      </div>
    </Container>
  )
}

export default RegisterForm