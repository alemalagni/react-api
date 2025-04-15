import style from './Actor.module.css'

function Actor({ immagine, nome, annoNascita, nazionalità, riconoscimenti, biografia }) {
    return (
        <div className={style.actor}>
            <div className={style.immagine}>
                <img src={immagine} alt="" />
            </div>
            <div className={style.nome}>
                <span>{nome}</span>
            </div>
            <div className={style.annoNascita}>
                <span>{annoNascita}</span>
            </div>
            <div className={style.nazionalità}>
                <span>{nazionalità}</span>
            </div>
            <div className={style.riconoscimenti}>
                {riconoscimenti.map((item) => (
                    <p>
                        {item}
                    </p>
                ))}
            </div>
            <div className={style.biografia}>
                <span>{biografia}</span>
            </div>
        </div>
    );
}

export default Actor;