import React from "react";
import {useState} from 'react'

import Person from "../class/Person";

import './Card.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default props =>{

    //valores e setters dos inputs
    const [inputValueNome, setInputValueNome] = useState('');
    const [inputValueSobrenome, setInputValueSobrenome] = useState('');
    const [inputValueEmail, setInputValueEmail] = useState('');
    const [inputValueSenha, setInputValueSenha] = useState('');
    const [inputValueSenhaC, setInputValueSenhaC] = useState('');
    const [inputValueCheck, setInputValueCheck] = useState({
        option: false
    });

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

      const handleInputChangeCheck = (event) => {
        setInputValueCheck(event.target.value);
        
      };

    //Quando apertar o botão, cria a pessoa e para teste, coloca printa a pessoa no console
      const handleInputChangeBotao = (event) => {
        if((inputValueNome===inputValueSenhaC)){
         
          const person = new Person(inputValueNome,inputValueSobrenome,inputValueEmail,inputValueSenha)
          console.log(person)
          console.log(inputValueCheck)
          const json = JSON.stringify(person)
          
          event.preventDefault();
        }
       else{
        toast("Senhas não são iguais =(");
        event.preventDefault();
       }
        
        
        
      };



    return(
        <div className="Card">
            <form>
                <h1 className="titulo">Criar uma conta no Projeto</h1>

                <p className="texto">Nome:</p>
                <input value={inputValueNome} onChange={handleInputChangeNome} placeholder="Digite seu nome" className="entrada"></input>

                <p className="texto">Sobrenome:</p>
                <input value={inputValueSobrenome} onChange={handleInputChangeSobrenome} placeholder="Digite seusobrenome" className="entrada"></input>

                <p className="texto">Email:</p>
                <input value={inputValueEmail} onChange={handleInputChangeEmail} placeholder="Ex.: leticia@mail.com" className="entrada"></input>

                <p className="texto">Senha:</p>
                <input value={inputValueSenha} onChange={handleInputChangeSenha} type="password" placeholder="Digite sua senha: " className="entrada"></input>

                <p className="texto">Senha (confirmação):</p>
                <input value={inputValueSenhaC} onChange={handleInputChangeSenhaC} type="password" placeholder="Digite sua senha: "  className="entrada"></input>

                <div className="check">
                <input name='option' type='checkbox' value={inputValueCheck.option} onChange={handleInputChangeCheck}></input>
                    <p className="texto">Você é um administrador?</p>
                </div>
                

                <div className="div-botao">
                    <input className="botao" type="submit" value="Cadastrar" onClick={handleInputChangeBotao} ></input>
                </div>
            </form>
            
        </div>
    )
}
