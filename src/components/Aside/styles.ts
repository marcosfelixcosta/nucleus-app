import styled from "styled-components";

export const Container = styled.div`
grid-area: AS;

background-color: #F29502;
padding-left: 20px;

`;


  export const  MenuContainer  = styled.nav`

  display:flex;
  flex-direction: column;
  
  margin-top:50px;
  `;

  export const  MenuItemLink = styled.a`
  color:${props => props.theme.colors.white};
  text-decoration: none;

  margin: 7px 0;
  display: flex;
  align-items: center;
  transition: opacity .3s;
  
  &:hover {
    opacity:.9;
    color:#302935 ;
  }

  > svg{

    font-size: 18px;
    margin-right:10px;
  }
  
  `;