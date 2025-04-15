import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  function fetchLista() {
    const lista = [];
    axios.get('https://freetestapi.com/api/v1/actors', (req, res) => {
      lista = data;
      console.log(lista);
    })
  }

  return (
    fetchLista()
  );
}

export default App
