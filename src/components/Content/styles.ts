import styled from "styled-components";

export const Container = styled.div`
grid-area: CT;
color: ${props =>props.theme.colors.white};
background-color: #302935; 

padding: 20px;

height: calc(100vh - 70px);
overflow-y: scroll;

::-webkit-scrollbar {
  width: 10px;

}

::-webkit-scrollbar-thumb {
  background-color:#302935; /* ${props => props.theme.colors.secondary};*/
  border-radius: 10px;

}

::-webkit-scrollbar-track {
  background-color:#302935;/* ${propos => propos.theme.colors.terty};*/
}

`;