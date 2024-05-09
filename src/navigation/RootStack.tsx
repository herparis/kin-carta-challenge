import React from 'react'
import { createNativeStackNavigator, NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import type { RootContactObject } from '../client/contactApi'
import { ContactList, ContactDetails } from '../screens'
import { FavoriteButton } from './components'

type ContactDetailsParams = {
  contact: RootContactObject
}

type RootStackParamList = {
  Contacts: undefined;
  ContactDetails: ContactDetailsParams;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName='Contacts'>
      <Stack.Screen name='Contacts' component={ContactList} />
      <Stack.Screen
        name='ContactDetails'
        component={ContactDetails}
        options={{
          headerTitle: '',
          headerRight: () => <FavoriteButton />
        }}
      />
    </Stack.Navigator>
  )
}

export type NavigationProps<T extends keyof RootStackParamList> = NativeStackNavigationProp<RootStackParamList, T>
export type RouteProps<T extends keyof RootStackParamList> = RouteProp<RootStackParamList, T>
export type ScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>

export default RootStack