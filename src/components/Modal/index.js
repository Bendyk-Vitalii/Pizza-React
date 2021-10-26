import React, { useState } from 'react';
import ReactModal from 'react-modal';

import {
    Label,
    InputWrapper,
    ForgotButton,
    Button,
    Form,
    OpenButton,
    Input,
    CloseModalButton
} from './Modal';

ReactModal.setAppElement('#root');

const ModalElement = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    console.log("open")
  }

  function afterOpenModal() {

  }

  function closeModal() {
    setIsOpen(false);
  }
  

  return (
    <>
     <OpenButton onClick={openModal}>Log in</OpenButton>
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
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

export default ModalElement;

