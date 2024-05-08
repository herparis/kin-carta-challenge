import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


type RootStackParamList = {
  ContactList: undefined;
  ContactDetails: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='ContactList'>
        <RootStack.Screen name='ContactList' component={() => null} />
        <RootStack.Screen name='ContactDetails' component={() => null} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default App