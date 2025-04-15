import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  function fetchLista() {
    axios.get('https://freetestapi.com/api/v1/actors', (req, res) => {
      const lista = data;
      console.log(lista);
    })
  }

  return (
    fetchLista()
  );
}

export default App
