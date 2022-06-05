import React from "react";
import { Container, Profile, Header, LogImg } from "./styles";
import LogoImg from '../../assets/logo-top.png';
import Perfil from '../Perfil/index';


const MainHeader: React.FC = () => {
  
  return (

    <Container>


        <Header>
          
         <LogImg src={LogoImg} alt="Logo"/>
          </Header>

           <Profile>
             <Perfil></Perfil>
          
            </Profile>
    </Container>

  );

 }

 export default MainHeader;

