import './Cabecalho.css'

function Cabecalho(prop)
{
    return(
        <div id="cabecalho">
            <a id='linktopo' href='/'><h1>{prop.titulo}</h1></a>
        </div>
    );
}

export default Cabecalho;