import { useContext } from "react";
import { Context } from "../Context/DadosGlobais";
import Conteudo from "../EstruturaSite/Conteudo/Conteudo";

function Carrinho (prop) {
    const {CarrinhoAcoes} = useContext(Context);
    const carrinho = CarrinhoAcoes.getCarrinho();

    return (
        <>
            <Conteudo titulo="Meu carrinho">
                {carrinho.length === 0 && <h3>Carrinho vazio</h3>}
                {carrinho.length > 0 && 
                    <>
                        {carrinho.map((item) => <p key={item.idproduto}>{item.nome}</p>)}
                    </>
                }
            </Conteudo>
        </>
    )
}

export default Carrinho;