import React, { useState } from 'react';
import { Form, Button, Container, Row } from 'react-bootstrap';

const ResetPasswordForm = ({ validated, handleSubmit}) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <Container className='mt-5'>
            <div>
                <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e, password, confirmPassword)}>
                    <Row className='mb-3'>
                        <Form.Group className='mt-2'>
                            <Form.Label >
                                Password  <span className="text-danger">*
                                </span></Form.Label>
                            <Form.Control
                                type='password'
                                name='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Enter password'
                                required
                                 />
                        </Form.Group>
                        <Form.Group className='mt-2'>
                            <Form.Label>
                                Confirm Password  <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                                type='password'
                                name='confirmPassword'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder='Enter password again'
                                required
                                 />
                        </Form.Group>
                    </Row>
                    <div className='py-4'>
                        <Button variant='primary' type='submit'>
                            Reset password
                        </Button>
                    </div>
                </Form>
            </div>
        </Container>
    );
};

export default ResetPasswordForm;
