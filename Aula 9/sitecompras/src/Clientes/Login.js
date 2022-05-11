import { useContext, useState } from "react";
import { Context } from "../Context/DadosGlobais";
import Conteudo from "../EstruturaSite/Conteudo/Conteudo";
import { api } from "../Services/API";
import Cliente from "./Cliente";


export default function Login()
{

    const {ClienteAcoes} = useContext(Context)
    const [login, setLogin] = useState({email: '', senha: ''})

    function handleEntrar()
    {
        api.post('/costumers/login', login)
          .then(function (response) {
              if (response.data.sucesso)
              {
                ClienteAcoes.setCliente({email: login.email, token: response.data.token})
              }
              else
              {
                alert('Houve um problema com a autenticação!');
                ClienteAcoes.setCliente(null)
              }
          })
          .catch(function (error) {
            alert('Houve um problema com a autenticação!\n'+error);
            ClienteAcoes.setCliente(null)
          });

    }

    function handleSair()
    {
        ClienteAcoes.setCliente(null)
    }

    function handleEmail({target: {value}}) {
        setLogin({...login, email: value})
    }
    function handleSenha({target: {value}}) {
        setLogin({...login, senha: value})
    }

    return(
        <>
        {ClienteAcoes.getCliente()===null &&
            <Conteudo titulo="Efetuar login">
                <form>
                    <div>
                        <label htmlFor="email">Email:</label><br/>
                        <input type="email" name="email" id="email" value={login.email} onChange={handleEmail} />
                    </div>
                    <br/>
                    <div>
                    <label htmlFor="senha">Senha:</label><br/>
                        <input type="password" name="senha" id="senha" value={login.senha} onChange={handleSenha} />
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