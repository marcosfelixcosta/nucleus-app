import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom'


import { Container } from './style';

export default function Sidebar(){

 
  return (
   <Container>
    <div>
    <aside className="app-sidebar">
    
    
    <footer>
     <Link to="/">
       <button type="button" name='button'>
       <FiArrowLeft size={35} color="#FFF" />
            
      </button>
      </Link>
     
       
    </footer>
  </aside>
 
  </div>
  </Container>
 
  );
}