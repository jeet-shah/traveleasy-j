import React from 'react';
import Store from './Store'
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import {StackNavigator} from './component/StackNavigator';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={Store}>
      <AppContainer />
    </Provider>
  );
}

const SwitchNavigator = createSwitchNavigator({
  Stack: { screen:StackNavigator }
});

const AppContainer = createAppContainer(SwitchNavigator)
