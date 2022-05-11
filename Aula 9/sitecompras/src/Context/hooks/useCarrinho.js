
import { useState } from "react";

export default function useCarrinho()
{

    const [carrinho, setCarrinho] = useState([])

    const addItemCarrinho = (novoItem) => {
        let itempesq = getItemCarrinho(novoItem.idproduto)
        if (itempesq)
        {
            setCarrinho(carrinho.map(item => 
                item.idproduto === novoItem.idproduto 
                ? {...item, qtd : itempesq.qtd + 1} 
                : item))
        }
        else
            setCarrinho([...carrinho, novoItem])
        
    }

    const clearCarrinho = () => setCarrinho([])

    const getItensCarrinho = () => carrinho

    const getItemCarrinho = (idproduto) => carrinho.find((item) => item.idproduto === idproduto);

    const removeItemCarrinho = (idproduto) => {
        const novoCarrinho = carrinho.filter((item) => item.idproduto!==idproduto);
        setCarrinho(novoCarrinho);
    }

    return { addItemCarrinho, getItensCarrinho, removeItemCarrinho, clearCarrinho }
    
}