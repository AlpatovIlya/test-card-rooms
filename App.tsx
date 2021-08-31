import React, {FC} from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import Main from './src/Main';
import store from './src/redux/store';

const App: FC = () => {
  LogBox.ignoreAllLogs(true);
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};


export default App;
