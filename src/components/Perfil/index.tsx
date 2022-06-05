/* eslint-disable jsx-a11y/anchor-is-valid */
import  { useRef } from "react";
import "./styles.css";
import { useDetectOutsideClick } from "./useDetectOusideClick";
import imgPerfil from '../../assets/icon-seta.svg';
import imgphoto from '../../assets/perfil.png';
import React from "react";


export default function Perfil() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  const nome = localStorage.getItem('@Nucleus:nome');
  const Nsemaspas = nome?.replace(/"/g,'');

  return (
    <div className="container">
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <img src={imgphoto} width="40px" height="40px" alt ="User Pho"/>
          <span>{Nsemaspas}</span>
          <img
           src={imgPerfil}
            alt="User avatar"
          />
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <a href="#">Editar perfil</a>
            </li>
            <li>
              <a href="/">Sair</a>
            </li>
            
          </ul>
        </nav>
      </div>
    </div>
  );
}
