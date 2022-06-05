import styled from "styled-components";

export const Grid = styled.div`
display:grid;
grid-template-columns: 250px auto;
grid-template-rows: 85px auto;

grid-template-areas:
'MH MH'
'AS CT';

height:100vh;


`;