import React, { useState } from 'react'
import { ResetPasswordForm, AlertModal } from '../../components';
/* import { fakeApiCallToResetPassword } from '../../api'; */

const ResetPasswordPage = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');

  // Para validación
/*   const [validated, setValidated] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState(''); */

  const handleClose = () => setModalShow(false);

 /*  const handleSubmit = async (e, password, confirmPassword) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setModalTitle('Error');
      setModalMessage('Passwords do not match.');
      setModalShow(true);
      return;
    }

    try {
      await fakeApiCallToResetPassword(password); // Llamada a la API real
      setModalTitle('Success');
      setModalMessage('Your password has been successfully reset.');
      setModalShow(true);
    } catch (error) {
      setModalTitle('Error');
      setModalMessage('An error occurred. Please try again.');
      setModalShow(true);
    }
  }; */

  return (
    <div>
      {/* <ResetPasswordForm handleSubmit={handleSubmit} /> */}
      <AlertModal show={modalShow} handleClose={handleClose} title={modalTitle} message={modalMessage} />

    </div>
  )
}

export default ResetPasswordPage