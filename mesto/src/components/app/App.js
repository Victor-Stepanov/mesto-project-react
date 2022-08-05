import React, {useEffect, useState} from "react";
import styles from './App.module.css'
import  Header  from "../header/header";
import Main from '../main/main';


function App() {
  
  return (
    <div className={styles.app}>
      <Header />
      <Main/>
    </div>
  );
}

export default App;