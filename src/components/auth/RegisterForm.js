import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button, Row } from 'react-bootstrap';
import '../../styles/components/auth.css'

const RegisterForm = ({ formData, handleChange, handleSubmit, validated, passwordError }) => {

  return (
    <Container className='mt-5'>
      <div className='auth-container'>
        <h1>Register</h1>
        {/*Form for Register */}
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group controlId="validationCustom01" className='mt-2'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter email: example@gmail.com'
                required />
              <Form.Control.Feedback>
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom02" className='mt-2'>
              <Form.Label controlId="formPassword">Password</Form.Label>
              <Form.Control
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                placeholder='Enter password'
                required />
              <Form.Control.Feedback>
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a password.
              </Form.Control.Feedback>
              {passwordError && (
                <div className="text-danger">{passwordError}</div>
              )}
            </Form.Group>
            <Form.Group controlId="validationCustom03" className='mt-2'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder='Enter password again'
                required />
              <Form.Control.Feedback type="invalid">
                Please provide a confirm password.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
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