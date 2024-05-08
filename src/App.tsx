import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux'
import store from './store'
import { ContactList } from './screens'

type RootStackParamList = {
  ContactList: undefined;
  ContactDetails: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName='ContactList'>
          <RootStack.Screen name='ContactList' component={ContactList} />
          <RootStack.Screen name='ContactDetails' component={() => null} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App