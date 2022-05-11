import { useState } from "react";
import Conteudo from "../EstruturaSite/Conteudo/Conteudo";
import { api } from "../Services/API";


export default function Cadastro()
{
    const [sucesso, setSucesso] = useState(false)
    const [cadastro, setCadastro] = useState({email: '', senha: '', confSenha: ''})
    function handleConfirmar()
    {

        api.post('/costumers', cadastro)
          .then(function (response) {
            setSucesso(true)
          })
          .catch(function (error) {
            alert('Houve um problema com seu cadastro!\n'+error);
            setSucesso(false)
          });
    }

    function handleEmail({target: {value}}) {
        setCadastro({...cadastro, email: value})
    }

    function handleSenha({target: {value}}) {
        setCadastro({...cadastro, senha: value})
    }

    function handleConfSenha({target: {value}}) {
        setCadastro({...cadastro, confSenha: value})
    }


    return(
        <Conteudo titulo="Efetuar cadastro">
            {!sucesso && <form>
                <div>
                    <label htmlFor="email">Email:</label><br/>
                    <input type="email" name="email" id="email" value={cadastro.email} onChange={handleEmail} />
                </div>
                <br/>
                <div>
                 <label htmlFor="senha">Senha:</label><br/>
                    <input type="password" name="senha" id="senha" value={cadastro.senha} onChange={handleSenha} />
                </div>
                <br/>
                <div>
                    <label htmlFor="confsenha">Confir sua senha:</label><br/>
                    <input type="password" name="confsenha" id="confsenha" value={cadastro.confSenha}  onChange={handleConfSenha} />
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