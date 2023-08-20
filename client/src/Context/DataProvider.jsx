import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({children}) => {
  const [account, setAccount] = useState(" ");
  return (
    <DataContext.Provider value={{ account, setAccount }}>
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;



// import { createContext, useState } from 'react';

// export const LoginContext = createContext(null);

// const ContextProvider = ({children}) => {

//     const [ account, setAccount ] = useState('');
    
//     return (
//         <LoginContext.Provider value={{ account, setAccount }}>
//             {children}
//         </LoginContext.Provider>
//     )
// }

// export default ContextProvider;