import React from "react";
import { MdExitToApp, MdComputer, MdBusiness, MdCategory, MdModelTraining,  MdBadge, MdAccountCircle, MdChecklist, MdFactCheck, MdMenuBook} from 'react-icons/md';
import { Container, MenuContainer, MenuItemLink} from "./styles";


const Asinde: React.FC = () => {
  return (

    <Container>
    
      
      <MenuContainer>
          <MenuItemLink href="/chamados">
            <MdMenuBook size={30}/>
            Chamados
          </MenuItemLink>

          <MenuItemLink href="#">
            <MdComputer size={30} />
            Equipamentos
          </MenuItemLink>

          <MenuItemLink href="#">
            <MdBusiness size={30}/>
            Fabricantes
          </MenuItemLink>

          <MenuItemLink href="#">
          <MdCategory size={30}/>
            Categorias
          </MenuItemLink>

          <MenuItemLink href="#">
          <MdModelTraining size={30}/>
            Modelos
          </MenuItemLink>

          <MenuItemLink href="#">
          <MdBadge size={30}/>
            Departamentos
          </MenuItemLink>
          
          <MenuItemLink href="#">
          <MdFactCheck size={30}/>
            Status Atendimento
          </MenuItemLink>

          <MenuItemLink href="#">
          <MdChecklist  size={30}/>
            Avaliar Atendimento
          </MenuItemLink>

          <MenuItemLink href="#">
          <MdAccountCircle size={30}/>
            Usuários
          </MenuItemLink>

          <MenuItemLink href="#">
          <MdExitToApp size={30}/>
            Sair
          </MenuItemLink>

      </MenuContainer>


    </Container>

  );

 }

 export default Asinde;

