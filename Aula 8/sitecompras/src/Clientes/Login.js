import { useContext } from "react";
import { Context } from "../Context/DadosGlobais";
import Conteudo from "../EstruturaSite/Conteudo/Conteudo";
import Cliente from "./Cliente";


export default function Login()
{

    const {ClienteAcoes} = useContext(Context)

    function handleEntrar()
    {
        ClienteAcoes.setCliente({email: "tofanini@gmail.com", token: "xpto"})
    }

    function handleSair()
    {
        ClienteAcoes.setCliente(null)
    }

    return(
        <>
        {ClienteAcoes.getCliente()===null &&
            <Conteudo titulo="Efetuar login">
                <form>
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
                        <input type="button" onClick={handleEntrar} name="entrar" id="entrar" value="Entrar" />
                    </div>
                </form>
            </Conteudo>
        }
        {ClienteAcoes.getCliente()!==null &&
            <Conteudo titulo="Dados cadastrais">
               <Cliente />
               <form>
                    <div>
                        <input type="button" onClick={handleSair} name="sair" id="sair" value="Sair" />
                    </div>
                </form>
            </Conteudo>
        }
        </>
    )
}