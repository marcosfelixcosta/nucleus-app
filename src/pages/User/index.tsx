/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import api from '../../services/api';
import Asinde from "../../components/Siderbar";
import './style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




interface CadUser {
  nome: string;
  logradouro: string;
  estado: string;
  bairro: string;
  cidade: string;
  email: string;
  senha: string;
  telefone: string;
  acesso: number;
  status: number;

}

const CreateUser: React.FC = () => {

  const history = useHistory();

  const notify_sucesso = () => toast.success("Cadastro realizado com sucesso!", { theme: "colored" });
  const notify_erro = () => toast.error("Erro na conexão com API do Nucleus. Favor ve,rificar!", { theme: "colored" });

  const [model, setModel] = useState<CadUser>({
    nome: '',
    logradouro: '',
    estado: '',
    bairro: '',
    cidade: '',
    email: '',
    senha: '',
    telefone: '',
    acesso: 1,
    status: 1

  });


  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setModel({
      ...model, [e.target.name]: e.target.value
    });
  }


  function updateModelSelect(e: ChangeEvent<HTMLSelectElement>) {
    setModel({
      ...model, [e.target.name]: e.target.value
    });
  }



  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {

      const responseapi = await api.post('/save', model);
      notify_sucesso();
      // await window.location.reload();

      //history.push('/');

    } catch (error) {
      notify_erro();
      console.log(model);

    }

  }


  return (

    <div id="page-create-usuario">
      <Asinde />
      <main>
        <form onSubmit={onSubmit} className="create-usuario-form">

          <fieldset>
            <legend>Criar conta</legend>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input type="text" id="txnome" name="nome" required
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} placeholder="Digite seu nome" />

            </div>

            <div className="input-block">
              <label htmlFor="logradouro">Logradouro</label>
              <input type="text" id="txtlogradouro" name="logradouro" required
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} placeholder="Endereço" />
            </div>

            <div className="input-block">
              <label htmlFor="bairro">Bairro</label>
              <input type="text" id="txtbairro" name="bairro" required
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} placeholder="Bairro" />
            </div>

            <div className="input-block">
              <label htmlFor="cidade">Cidade</label>
              <input type="text" id="txtcidade" name="cidade" required
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} placeholder="Cidade" />
            </div>

            <div className="input-block">
              <label htmlFor="estado">Estado</label>
              <select name="estado" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updateModelSelect(e)} defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled>Escolha o Estado</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceara</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>

              </select>

            </div>

            <div className="input-block">
              <label htmlFor="telefone">Telefone</label>
              <input type="text" id="txttelefone" name="telefone" required
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} placeholder="Telefone" />
            </div>

            <div className="input-block">
              <label htmlFor="email">E-mail</label>
              <input type="text" id="txtemail" name="email" required
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} placeholder="E-mail" />
            </div>

            <div className="input-block">
              <label htmlFor="password">Senha</label>
              <input type="password" id="txtsenha" name="senha" required
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} placeholder="Senha" autoComplete="on" />
            </div>

            <legend></legend>

          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
            <ToastContainer
              position="top-right"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover />
          </button>

        </form>

      </main>
    </div>

  );
}

export default CreateUser;