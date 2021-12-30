import React, { useState } from 'react';
import {
    Label,
    InputWrapper,
    ForgotButton,
    Button,
    Form,
    OpenButton,
    Input,
    CloseModalButton,
    LogModal
} from './LogInModal';

LogModal.setAppElement('#root');

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
      <LogModal
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
      </LogModal>
    </>
  );
}

export default LogInModal;

