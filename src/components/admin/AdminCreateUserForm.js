import React from "react";
import { Form,Button } from "react-bootstrap";

const AdminCreateUserForm = ({ formData, handleChange, handleSubmit, validated }) => {
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="userName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a name.
          </Form.Control.Feedback>
        </Form.Group>
  
        <Form.Group controlId="userEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>
  
        <Form.Group controlId="userPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a password.
          </Form.Control.Feedback>
        </Form.Group>
  
        <Form.Group controlId="userRole">
          <Form.Label>Role</Form.Label>
          <Form.Control as="select" name="role" value={formData.role} onChange={handleChange} required>
            <option value="">Select Role</option>
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Please select a role.
          </Form.Control.Feedback>
        </Form.Group>
  
        <Button className="mt-3" variant="primary" type="submit">
          Create User
        </Button>
      </Form>
    );
  };
  
export default AdminCreateUserForm;