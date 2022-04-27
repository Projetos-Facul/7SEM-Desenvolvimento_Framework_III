import useCarrinho from "./hooks/useCarrinho";

const { createContext } = require("react")

const Context = createContext();

function DadosGlobais ({children}) {
    const CarrinhoAcoes = useCarrinho();

    return (
        <Context.Provider value={{CarrinhoAcoes: CarrinhoAcoes}}>
            {children}
        </Context.Provider>
    )
}

export {DadosGlobais, Context}