import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

const ForgotPasswordForm = ({ handleSubmit }) => {
    const [email, setEmail] = useState('');
  return (
    <Container className='mt-5'>
      <div className='auth-container'>
        <h1>Forgot Password?</h1>
        {/*Form for Register */}
        <Form onSubmit={(e) => handleSubmit(e, email)}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'/>
          </Form.Group>
            <div className='py-4'>
                <Button variant='primary' type='submit'>
                    Submit
                </Button>
            </div>
            <Link to="/register" className='back-form'>Not got a My Account? Join now!</Link>
        </Form>
      </div>
  </Container>
  )
}

export default ForgotPasswordForm