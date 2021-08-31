import {createContext} from 'react';


const ThemeContext = createContext<{
    changeTheme:() => void, isMainTheme:boolean}>({
      changeTheme() {},
      isMainTheme: true,
    });


export default ThemeContext;
