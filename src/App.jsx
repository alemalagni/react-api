import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  function fetchLista() {
    const lista = [];
    axios.get('https://www.freetestapi.com/api/v1/actors')
      .then(data => {
        for (let i = 0; i < data.data.length; i++) {
          lista.push({
            immagine: data.data[i].image,
            nome: data.data[i].name,
            annoNascita: data.data[i].birth_year,
            nazionalità: data.data[i].nationality,
            riconoscimenti: data.data[i].awards,
            biografia: data.data[i].biography
          });
        }

        console.log(lista);
      })
  }

  return (
    fetchLista()
  );
}

export default App
