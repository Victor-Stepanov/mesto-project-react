import React, { useEffect, useState } from "react";
import Modal from "../modal/modal";
import styles from './App.module.css'
import  Header  from "../header/header";
import Main from '../main/main';
import { useDispatch } from 'react-redux';
import { getCards } from "../../services/actions/cards";
import ModalProfileInfo from "../modal-profile/modal-propfile";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards())
  }, [dispatch])


  const [isModalProfileOpened, setIsModalProfileOpened] = useState(false)


  const closeAllModals = () => {
    setIsModalProfileOpened(false)
  }

  const openProfileModal = () => {
    setIsModalProfileOpened(true)
  }


  return (
    <div className={styles.app}>
      <Header />
      <Main onClick={openProfileModal }/>
      {isModalProfileOpened &&
      <Modal
      onClose={closeAllModals}>
        <ModalProfileInfo/>
      </Modal>
      
      }
    </div>
  );
}

export default App;