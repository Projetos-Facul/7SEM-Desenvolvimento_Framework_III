import { useContext } from "react";
import { Context } from "../Context/DadosGlobais";
import Conteudo from "../EstruturaSite/Conteudo/Conteudo";


export default function Cliente()
{
    const {ClienteAcoes} = useContext(Context)
    return(
        <>
        <Conteudo titulo="Dados do cliente">
        {ClienteAcoes.getCliente()!==null && 
            <>
            <h3>Cliente</h3>
            <p>{ClienteAcoes.getCliente().email}</p>
            </>
        }
        {ClienteAcoes.getCliente()===null && <h3>Cliente não autenticado</h3>}
        </Conteudo>
        </>
    )
}