import { useState, useEffect } from 'react'
import axios from 'axios';
import actor from './components/actor.jsx';
import './App.css'

function App() {
  const lista = [];
  function fetchLista() {
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
    <div>
      {fetchLista()}
      {lista.map((item) => (
        <Actor
          immagine={item.immagine}
          nome={item.nome}
          annoNascita={item.annoNascita}
          nazionalità={item.nazionalità}
          riconoscimenti={item.riconoscimenti}
          biografia={item.biography}
        />))}
    </div>
  );
}

export default App
