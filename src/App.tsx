import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import store from './store'
import RootStack from './navigation'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  )
}

export default App