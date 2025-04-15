import style from './Actor.module.css'

function Actor({ immagine, nome, annoNascita, nazionalità, riconoscimenti, biografia }) {
    return (
        <div id='actor'>
            <div id='immagine'>
                <img src={immagine} alt="" />
            </div>
            <div id='nome'>
                <span>{nome}</span>
            </div>
            <div id='annoNascita'>
                <span>{annoNascita}</span>
            </div>
            <div id='nazionalità'>
                <span>{nazionalità}</span>
            </div>
            <div id='riconoscimenti'>
                <span>{riconoscimenti}</span>
            </div>
            <div id='biografia'>
                <span>{biografia}</span>
            </div>
        </div>
    );
}

export default Actor;