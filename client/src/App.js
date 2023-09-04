


import './App.css';

//components
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import {Box} from '@mui/material';

import  ContextProvider from './Context/DataProvider';



function App() {
  return (
    <Box style={{background: 'currentColor'}}>
   <ContextProvider>

  <Header/>
  <Box style={{marginTop:54}}/>
  <Home/>
  </ContextProvider>
  </Box>
 
  );
}

export default App;
