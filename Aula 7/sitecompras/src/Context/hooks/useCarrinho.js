import { useState } from "react";

function useCarrinho () {
    const [carrinho, setCarrinho] = useState([]);

    const addItemCarrinho = (novoItem) => {
        let itempesq = getItemCarrinho(novoItem.idproduto);
        if (itempesq) {
            setCarrinho(carrinho.map((item) => 
                item.idproduto = novoItem.idproduto
                ? {...item, qtd: itempesq.qtd + 1} 
                : item)
            )
        }
        else    
            setCarrinho([...carrinho, novoItem]);
    }

    const getCarrinho = () => carrinho;
    const clearCarrinho = () => setCarrinho([]);
    const getItemCarrinho = (id) => carrinho.find((item) => item.idproduto === id)
    const removerItemCarrinho = (id) => {
        const novoCarrinho = carrinho.filter((item) => item.idproduto !== id)
        setCarrinho(novoCarrinho);
    }

    return {addItemCarrinho, getCarrinho, clearCarrinho, getItemCarrinho, removerItemCarrinho}
}

export default useCarrinho;
