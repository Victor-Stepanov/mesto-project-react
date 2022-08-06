import React, {useEffect, useState} from "react";
import styles from './App.module.css'
import  Header  from "../header/header";
import Main from '../main/main';
import { useDispatch} from 'react-redux';
import {getInitialCardsFromServer} from '../../services/actions/cards'

function App() {


  return (
    <div className={styles.app}>
      <Header />
      <Main/>
    </div>
  );
}

export default App;