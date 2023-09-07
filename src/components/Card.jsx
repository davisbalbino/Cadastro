import React from "react";
import {useState} from 'react'

import Person from "../class/Person";

import './Card.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BiSolidEnvelope } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { BiLock } from "react-icons/bi";
import { BiSolidLock } from "react-icons/bi";

export default props =>{

    
    //regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    function isValidEmail(email){
      return emailRegex.test(email);
    }

    //valores e setters dos inputs
    const [inputValueNome, setInputValueNome] = useState('');
    const [inputValueSobrenome, setInputValueSobrenome] = useState('');
    const [inputValueEmail, setInputValueEmail] = useState('');
    const [inputValueSenha, setInputValueSenha] = useState('');
    const [inputValueSenhaC, setInputValueSenhaC] = useState('');

    //handles dos inputs, para escrevê-los
    const handleInputChangeNome = (event) => {
        setInputValueNome(event.target.value);
      };

      const handleInputChangeSobrenome = (event) => {
        setInputValueSobrenome(event.target.value);
      };
    
      const handleInputChangeEmail = (event) => {
        setInputValueEmail(event.target.value);
      }; 

      const handleInputChangeSenha = (event) => {
        setInputValueSenha(event.target.value);
      };

      const handleInputChangeSenhaC = (event) => {
        setInputValueSenhaC(event.target.value);
      };

    //Quando apertar o botão, teste se todas as informações estão coerentes, salva e cria uma pessoa. 
      const handleInputChangeBotao = (event) => {
        if(inputValueNome.length===0){
          toast("Nome está vazio =(");

        }
        else if(inputValueSobrenome.length===0){
          toast("Sobrenome está vazio =(");
        }
        else if(inputValueEmail.length===0){
          toast("E-mail está vazio =(");
        }
        else if(inputValueSenha.length===0){
          toast("Senha está vazia =(");
        }
        else if(inputValueSenhaC.length===0){
          toast("Senha (confirmação) está vazia =(");
        }
        else if(!isValidEmail(inputValueEmail)){
          toast("E-mail inválido");
        }
        else if(!(inputValueSenha===inputValueSenhaC)){
          toast("Senhas não são iguais");
        }
        
        else{
          toast("Usuário cadastrado com sucesso");
          const pessoa = new Person(inputValueNome,inputValueSobrenome,inputValueEmail,inputValueSenha);
          setInputValueNome('');
          setInputValueSobrenome('');
          setInputValueEmail('');
          setInputValueSenha('');
          setInputValueSenhaC('');
        }

        event.preventDefault();
      }



    return(
      <div>
        <div className="Card">
            <form>
                <h1 className="titulo">Criar uma conta no EventNow</h1>

               <p className="texto">Nome:</p>
                <div className="icons">
                  <BiUser></BiUser>
                  <input value={inputValueNome} onChange={handleInputChangeNome} placeholder="Digite seu nome" className="entrada"></input>
                </div>

                <p className="texto">Sobrenome:</p>
                <div className="icons">
                  <BiSolidUser></BiSolidUser>
                  <input value={inputValueSobrenome} onChange={handleInputChangeSobrenome} placeholder="Digite seu sobrenome" className="entrada"></input>

                </div>

                <p className="texto">Email:</p>
                <div className="icons">
                  <BiSolidEnvelope></BiSolidEnvelope>
                  <input value={inputValueEmail} onChange={handleInputChangeEmail} placeholder="Ex.: leticia@mail.com" className="entrada"></input>
                </div>
                
                <p className="texto">Senha:</p>
                <div className="icons">
                  <BiLock></BiLock>
                  <input value={inputValueSenha} onChange={handleInputChangeSenha} type="password" placeholder="Digite sua senha: " className="entrada"></input>
                </div>

                <p className="texto">Senha (confirmação):</p>
                <div className="icons">
                  <BiSolidLock></BiSolidLock>
                  <input value={inputValueSenhaC} onChange={handleInputChangeSenhaC} type="password" placeholder="Digite sua senha: "  className="entrada"></input>
                </div>

                <input type="file" className="input-img"></input>

                <div className="div-check">
                  <input type='checkbox' ></input>
                  <p>Modo Administrador</p>
                </div>
                
                <div className="div-botao">
                    <input className="botao" type="submit" value="Cadastrar" onClick={handleInputChangeBotao} ></input>
                    
                </div>

                
            </form>
            
        </div>
        <ToastContainer/>
      </div>
        
    )
}
