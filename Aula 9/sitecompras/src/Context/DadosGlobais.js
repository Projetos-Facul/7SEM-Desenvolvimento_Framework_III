import { createContext } from "react";
import useCarrinho from "./hooks/useCarrinho";
import useCliente from "./hooks/useCliente";


const Context = createContext()

function DadosGlobais({children})
{
    const CarrinhoAcoes =  useCarrinho()
    const ClienteAcoes = useCliente()

    return (
        <Context.Provider value={{CarrinhoAcoes: CarrinhoAcoes, ClienteAcoes: ClienteAcoes}}>
            {children}
        </Context.Provider>
    );
}


export {DadosGlobais, Context}