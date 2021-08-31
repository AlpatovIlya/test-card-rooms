import React, {FC, useContext} from 'react';
import {Switch, Text, View} from 'react-native';
import styled from 'styled-components';
import ThemeContext from '../context/themeContext';

const Settings: FC = () => {
  const {isMainTheme, changeTheme} = useContext(ThemeContext);
  return (
    <Wrapper>
      <List>
        <ListItem>
          <Switch value={isMainTheme} onValueChange={changeTheme}/>
          <ListText>Настройки</ListText>
        </ListItem>
      </List>


    </Wrapper>
  );
};

const Wrapper = styled(View)`
  flex: 1;
  background: ${({theme}) => theme.colors.background};
`;

const List = styled(View)`
  margin-top: 30px;
  padding: 10px 15px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${({theme}) => theme.colors.sub}
`;
const ListItem = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ListText = styled(Text)`
  color: ${({theme}) => theme.colors.text}
  font-size: 16px;
`;

export default Settings;
