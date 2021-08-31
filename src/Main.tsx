import React, {FC, useEffect, useState} from 'react';
import {Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import ThemeContext from './context/themeContext';
import RootStackNavigator from './navigator/RootStackNavigator';
import {findApartaments} from './redux/actions/shopActions';
import {darkTheme, mainTheme} from './themes';


const Main: FC = () => {
  const [theme, setTheme] = useState(mainTheme);
  const [toogleTheme, settoogleTheme] = useState(false);
  const dispatch = useDispatch();

  const changeTheme = () => {
    settoogleTheme((prev) => !prev);
    setTheme(toogleTheme? mainTheme: darkTheme);
  };


  useEffect(() => {
    dispatch(findApartaments());
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{changeTheme, isMainTheme: !toogleTheme}}>
        <RootStackNavigator />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};


export default Main;

