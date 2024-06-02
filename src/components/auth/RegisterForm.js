import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button, Row } from 'react-bootstrap';
import '../../styles/components/auth.css'

const RegisterForm = ({ formData, handleChange, handleSubmit, validated, emailError, passwordError, confirmPasswordError }) => {

  return (
    <Container className='mt-5'>
      <div className='auth-container'>
        <h1>Register</h1>
        {/*Form for Register */}
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group className='mt-2'>
              <Form.Label>
                Email <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type='email'
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter email: example@gmail.com'
                required
                isInvalid={!!emailError} />
              <Form.Control.Feedback>
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {emailError || 'Please provide an email.'}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mt-2'>
              <Form.Label >
                Password  <span className="text-danger">*
                </span></Form.Label>
              <Form.Control
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                placeholder='Enter password'
                required
                isInvalid={!!passwordError} />
              <Form.Control.Feedback>
                Looks good!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {passwordError || 'Please provide a password.'}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mt-2'>
              <Form.Label>
                Confirm Password  <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type='password'
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder='Enter password again'
                required
                isInvalid={!!confirmPasswordError} />
              <Form.Control.Feedback type="invalid">
                {confirmPasswordError || 'Please provide a confirm password.'}
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
/* {passwordError && (
  <div className="text-danger">{passwordError}</div>
)} */