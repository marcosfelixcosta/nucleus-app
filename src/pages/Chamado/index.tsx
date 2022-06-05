/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import api from '../../services/api';
import Asinde from "../../components/Siderbar";
import './style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface Cadchamado {
  abertura: Date;
  equipamento: string;
  setor: string;
  prioridade: string;
  impacto: string;
  filanizacao: Date;
  descricao: string;

}

const CreateUser: React.FC = () => {

  const history = useHistory();

  const notify_sucesso = () => toast.success("Cadastro realizado com sucesso!", { theme: "colored" });
  const notify_erro = () => toast.error("Erro na conexão com API do Nucleus. Favor ve,rificar!", { theme: "colored" });

  const [model, setModel] = useState<Cadchamado>({
    abertura: new Date(),
    equipamento: '',
    setor: '',
    prioridade: '',
    impacto: '',
    filanizacao: new Date(),
    descricao: '',

  });


  function updateModel(e: ChangeEvent<HTMLTextAreaElement>) {
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

    <div id="page-create-chamado">
      <Asinde />
      <main>
        <form onSubmit={onSubmit} className="create-chamado-form">

          <fieldset>
            <legend>Chamado</legend>

            <div className="input-block">
              <label htmlFor="equipamento">Equipamento</label>
              <select name="equipamento" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updateModelSelect(e)} defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled>Escolha o Equipamento</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>

              </select>
            </div>

            <div className="input-block">
              <label htmlFor="setor">Setor</label>
              <select name="setor" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updateModelSelect(e)} defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled>Escolha o Setor</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>

              </select>
            </div>

            <div className="input-block">
              <label htmlFor="prioridade">Prioridade</label>
              <select name="prioridade" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updateModelSelect(e)} defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled>Defina a Prioridade</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>

              </select>
            </div>

            <div className="input-block">
              <label htmlFor="impacto">Qual impacto ao Negócio?</label>
              <select name="impacto" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updateModelSelect(e)} defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled>Defina o Impacto</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>

              </select>
            </div>
           
            <div className="input-block">
              <label htmlFor="descricao">Descrição <span>Máximo de 300 caracteres</span></label>
              <textarea id="name" maxLength={300}  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => updateModel(e)} placeholder="Descrição do chamado" />
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