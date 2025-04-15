import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  function fetchLista() {
    axios.get('https://www.freetestapi.com/api/v1/actors')
      .then(data => {
        const lista = data;
        console.log(lista.data);
      })
  }

  return (
    fetchLista()
  );
}

export default App
