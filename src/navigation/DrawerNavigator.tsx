import React from 'react'

// #1 Importamos el -createDrawerNavigator-
import { createDrawerNavigator } from '@react-navigation/drawer'

// #2 Importamos la Screen TabNavigator
import { TabNavigator } from './TabNavigator'


import { ListPage } from '../pages/ListPage'


// #3 Importamos todas las pages
import { AboutAppPage } from '../pages/AboutAppPage'
import { ContactPage } from '../pages/ContactPage'


// #4 Creamos la constante receptora de -createDrawerNavigator-
export const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    // #5 Abrimos el Drawer.Navigator
    
    <Drawer.Navigator>
      
      {/* #6 Generamos las SCREENS de enlaces a las pages */}
      <Drawer.Screen 
        name='Proyectos'
        component={ TabNavigator }
        options={{ headerShown: false }}  
      />
      <Drawer.Screen 
        name='Acerca de esta App' 
        component={ AboutAppPage }
      
      />
      <Drawer.Screen 
        name='Contactanos' 
        component={ ContactPage }
      
      />
      <Drawer.Screen 
        name='Lista' 
        component={ ListPage }
      
      />
    </Drawer.Navigator>
  )
}