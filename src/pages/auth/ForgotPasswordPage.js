import React, {useState} from 'react'
import { Header, Footer, ForgotPasswordForm, AlertModal } from '../../components/'
/* import { fakeApiCallToSendResetEmail } from '../../api';  */

const ForgotPasswordPage = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');

  const handleClose = () => setModalShow(false);

/*   const handleSubmit = async (e, email) => {
    e.preventDefault();
    try {
      await fakeApiCallToSendResetEmail(email); // Llamada a la API real
      setModalTitle('Success');
      setModalMessage('If this email is registered, you will receive a password reset link.');
      setModalShow(true);
    } catch (error) {
      setModalTitle('Error');
      setModalMessage('An error occurred. Please try again.');
      setModalShow(true);
    }
  }; */

  return (
    <div>
     {/*  <ForgotPasswordForm handleSubmit={handleSubmit} /> */}
      <AlertModal show={modalShow} handleClose={handleClose} title={modalTitle} message={modalMessage} />
    </div>
  )
}

export default ForgotPasswordPage