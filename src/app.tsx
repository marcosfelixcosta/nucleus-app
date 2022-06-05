import React from "react";

import GlobslStyles from "./styles/GlobslStyles";

import {ThemeProvider} from 'styled-components';


import Routes from './routes';
import {AuthProvider} from "./context/AuthContext";

import dark from './styles/themes/dark';

const App: React.FC = () => {
  return (

  <>  
  <ThemeProvider theme={dark}>
   
     <AuthProvider>
    <Routes/>
    </AuthProvider>

    
    </ThemeProvider>
  <GlobslStyles/>
  </>
  
  );
}

export default App;