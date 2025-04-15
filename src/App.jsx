import { useState, useEffect } from 'react'
import axios from 'axios';
import Actor from './components/Actor'
import './App.css'

function App() {
  const [lista, setLista] = useState([]);
  useEffect(() => {
    axios.get('https://www.freetestapi.com/api/v1/actors')
      .then(data => {
        for (let i = 0; i < data.data.length; i++) {
          const nuovaLista = response.data.map(actor => ({
            immagine: actor.image,
            nome: actor.name,
            annoNascita: actor.birth_year,
            nazionalità: actor.nationality,
            riconoscimenti: actor.awards,
            biografia: actor.biography
          }));
          setLista(nuovaLista);
        }
      })
  }, []);

  console.log(lista[34].immagine);

  return (
    <div id='lista'>
      {lista.map((item) => (
        <Actor
          key={item.nome}
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

export default App;
