import styled from "styled-components";

export const Container = styled.div`
grid-area: MH;

color: ${props =>props.theme.colors.white};
background-color:#302935; 

display:flex;
justify-content: space-between;

align-items:center;

padding: 0 10px;



border-bottom: 1px solid #F29502;


`;

export const Profile = styled.div`
 color: ${props => props.theme.colors.white};

`;

export const  Header = styled.header`
height:70px;
display:inline;

align-items:center;

`;


export const  Title = styled.h3`
color: ${props => props.theme.colors.white};
margin-left: 10px;

`;

export const  LogImg = styled.img`
height:55px;
width:90px;
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;