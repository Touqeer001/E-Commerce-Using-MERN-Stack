// import logo from './logo.svg';
import './App.css';

//components
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import {Box} from '@mui/material';

import DataProvider from './Context/DataProvider'



function App() {
  return (

  <DataProvider>
    
  <Header/>
  <Box style={{marginTop:54}}/>
  <Home/>
</DataProvider>
  );
}

export default App;
