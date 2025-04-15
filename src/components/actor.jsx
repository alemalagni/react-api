export default function actor({ immagine, nome, annoNascita, nazionalità, riconoscimenti, biografia }) {
    return (
        <div>
            <div>
                <img src={immagine} alt="" />
            </div>
            <div>
                <span>{nome}</span>
            </div>
            <div>
                <span>{annoNascita}</span>
            </div>
            <div>
                <span>{nazionalità}</span>
            </div>
            <div>
                <span>{riconoscimenti}</span>
            </div>
            <div>
                <span>{biografia}</span>
            </div>
        </div>
    );
}