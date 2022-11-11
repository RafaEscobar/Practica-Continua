import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { NativeBaseConfigProvider } from 'native-base/lib/typescript/core/NativeBaseContext';
import React from 'react'
import 'react-native-gesture-handler';
import { DrawerNavigator } from './src/navigation/DrawerNavigator';

export const App = () => {
  return (
<NativeBaseProvider>
<NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
</NativeBaseProvider>
  )
}
