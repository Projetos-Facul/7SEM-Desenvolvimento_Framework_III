import Conteudo from "../EstruturaSite/Conteudo/Conteudo";
import Carrinho from "./Carrinho";
import Cliente from "../Clientes/Cliente";
import { Context } from "../Context/DadosGlobais";
import { useContext, useState } from "react";

export default function FinalizarCompra()
{
    const [sucesso, setSucesso] = useState(false)
    const {CarrinhoAcoes} = useContext(Context)

    function handleFinalizarCompra()
    {
        CarrinhoAcoes.clearCarrinho()
        setSucesso(true)

    }

    return(
        <>
        <Conteudo titulo="Finalizar Compra">
            {sucesso &&
                <>
                <p>Compra realizada com sucesso!</p>
                <h3>Obrigado</h3>
                </>
            }
            {!sucesso &&
                <>
                <Cliente />
                <Carrinho />
                <p><a href='#finalizar' onClick={handleFinalizarCompra}>Finalizar Compra</a></p>
                </>
            } 
        </Conteudo>
        </>
    );

}