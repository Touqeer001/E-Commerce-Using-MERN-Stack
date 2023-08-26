


import './App.css';

//components
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import {Box} from '@mui/material';

import  ContextProvider from './Context/DataProvider';



function App() {
  return (
   <ContextProvider>

  <Header/>
  <Box style={{marginTop:54}}/>
  <Home/>
  </ContextProvider>
 
  );
}

export default App;
