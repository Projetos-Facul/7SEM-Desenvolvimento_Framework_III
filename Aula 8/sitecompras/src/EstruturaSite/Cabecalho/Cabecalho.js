import './Cabecalho.css'

function Cabecalho(prop)
{
    return(
        <div id="cabecalho">
            <h1><a id="linktopo" href="/">{prop.titulo}</a></h1>
        </div>
    );
}

export default Cabecalho;