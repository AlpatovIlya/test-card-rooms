import React, {FC, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import {Home, Settings} from '../screens';
import {ScreenNames} from '../constants';
import {SettingIcon, ShopIcon} from '../assets/icons';
import {SvgProps} from 'react-native-svg';
import {ThemeContext} from 'styled-components';


const TabNavigator = createBottomTabNavigator();

const TAB_ICON_SIZE = 40;

const RootStackNavigator: FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <NavigationContainer>
      <TabNavigator.Navigator screenOptions={{
        tabBarInactiveTintColor: theme.colors.sub,
        tabBarActiveTintColor: theme.colors.main,
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        tabBarStyle: {
          borderTopWidth: 5,
          borderTopColor: theme.colors.sub,
          backgroundColor: theme.colors.background,
        },
        headerTintColor: theme.colors.text,
      }}>
        <TabNavigator.Screen name={ScreenNames.HOME} component={Home} options={{
          title: 'Магазин',
          tabBarIcon: ShopTabBarIcon,
        }}/>
        <TabNavigator.Screen name={ScreenNames.SETTINGS} component={Settings}
          options={{
            title: 'Настройки',
            tabBarIcon: SettingTabBarIcon,
          }}/>

      </TabNavigator.Navigator>
    </NavigationContainer>
  );
};

const ShopTabBarIcon:FC<any & SvgProps> = ({focused, ...props}) => {
  const theme = useContext(ThemeContext);
  return <ShopIcon fill={`${focused ? theme.colors.main: theme.colors.sub}`}
    width={TAB_ICON_SIZE}
    height={TAB_ICON_SIZE} {...props}/>;
};

const SettingTabBarIcon:FC<any & SvgProps> = ({focused, ...props}) => {
  const theme = useContext(ThemeContext);

  return <SettingIcon fill={`${focused ? theme.colors.main: theme.colors.sub}`}
    width={TAB_ICON_SIZE}
    height={TAB_ICON_SIZE} {...props}/>;
};


export default RootStackNavigator;
