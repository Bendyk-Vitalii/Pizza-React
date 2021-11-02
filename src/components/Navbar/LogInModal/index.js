import React, { useState } from 'react';
import ReactModal from 'react-modal';
// import { compose } from 'redux';
// import { connect } from 'react-redux';
// import commerce from '../../lib/commerce';
import {
    Label,
    InputWrapper,
    ForgotButton,
    Button,
    Form,
    OpenButton,
    Input,
    CloseModalButton
} from './LogInModal';

ReactModal.setAppElement('#root');

const LogInModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
 

  return (
    <>
     <OpenButton onClick={openModal}>Log in</OpenButton>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <CloseModalButton onClick={closeModal}/>
          <Form>
              <Label>Log in</Label>
              <InputWrapper>
              <Input type="email" name="email" placeholder="email" />
              <Input type="password" name="password" placeholder="password" />
              </InputWrapper> 
              <ForgotButton>forgot password?</ForgotButton>
              <Button>Log in</Button>
              <Button>Registration</Button>
          </Form>
      </ReactModal>
    </>
  );
}

export default LogInModal;

