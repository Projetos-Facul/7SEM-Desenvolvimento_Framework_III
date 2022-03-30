import './Cabecalho.css'

function Cabecalho (prop) {
    return (
        <div id="cabecalho">
            <h1>{prop.titulo}</h1>
        </div>
    );
}

export default Cabecalho;