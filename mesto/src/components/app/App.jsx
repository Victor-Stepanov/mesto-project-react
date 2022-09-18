import React, { useState } from "react";
import Modal from "../modal/modal";
import styles from "./App.module.css";
import Header from "../header/header";
import Main from "../main/main";
import ModalProfileInfo from "../modal-profile/modal-propfile";
import { Footer } from "../footer/footer";

const App = () => {

  const [isModalProfileOpened, setIsModalProfileOpened] = useState(false);

  const closeAllModals = () => {
    setIsModalProfileOpened(false);
  };

  const openProfileModal = () => {
    setIsModalProfileOpened(true);
  };

  return (
    <div className={styles.app}>
      <Header />
      <Main onClick={openProfileModal} />
      <Footer />
      {isModalProfileOpened &&
        <Modal
          onClose={closeAllModals}>
          <ModalProfileInfo />
        </Modal>

      }
    </div>
  );
}

export default App;
