import { useState } from "react";
import Conteudo from "../EstruturaSite/Conteudo/Conteudo";


export default function Cadastro()
{
    const [sucesso, setSucesso] = useState(false)
    function handleConfirmar()
    {
        setSucesso(true)
    }

    return(
        <Conteudo titulo="Efetuar cadastro">
            {!sucesso && <form>
                <div>
                    <label htmlFor="email">Email:</label><br/>
                    <input type="email" name="email" id="email" />
                </div>
                <br/>
                <div>
                 <label htmlFor="senha">Senha:</label><br/>
                    <input type="password" name="senha" id="senha" />
                </div>
                <br/>
                <div>
                    <label htmlFor="confsenha">Confir sua senha:</label><br/>
                    <input type="password" name="confsenha" id="confsenha" />
                </div>
                <br/>
                <div>
                    <input onClick={handleConfirmar} type="button" name="confirmar" id="confirmar" value="Confirmar" />
                </div>
            </form>}

            {sucesso && <h3>Cliente cadastrado com sucesso</h3>}

        </Conteudo>
    )
}