


import './App.css';

//components
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import {Box} from '@mui/material';

import  ContextProvider from './Context/DataProvider';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import DetailView from './components/details/DetailView'
import Card from './components/cart/Card';

function App() {
  return (
    // <Box style={{background: 'currentColor'}}>
   <ContextProvider>

   <BrowserRouter>

  <Header/>
  <Box style={{marginTop:54}}/>
  <Routes>
  <Route path='/' element={<Home/>}/>
 <Route path='/product/:id' element={<DetailView/>}/>
 <Route path='/card' element={<Card/>}/>
  </Routes>
  </BrowserRouter>
  </ContextProvider>
 
  /* </Box> */
 
  );
}

export default App;
