import React from 'react'

// #1 Agregamos la importación de -createBottomTabNavigator-
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// #2 Importamos todas nuestras Screens
import { HabitsScreen } from '../screens/HabitsScreen';
import { PointsScreen } from '../screens/PointsScreen';


// #3 Importamos el lugar de extracción de los iconos
import Icon from 'react-native-vector-icons/Ionicons';

// #11 Importamos hook -useNavigation-
import { useNavigation } from '@react-navigation/native';
// #12 Importamos el -DrawerActions- para poder llamar manualmente* al Drawer
import { DrawerActions } from '@react-navigation/native';
// #13 Importamos el btn -TouchableOpacity- que ejecutara la accion de llamar al Drawer 
import { TouchableOpacity } from 'react-native';

// #4 Creamos la constante receptora de -createBottomTabNavigator-
const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  // #14 Declaramos la constante de control pare el -useNavigation-
  const navigatio = useNavigation();
  return (
    // #5 Abrimos el Tab.Navigator
    <Tab.Navigator 
    // #6 Creanos el atributo screenOptions
    screenOptions={ ({ route }) => ({
      // #7 Se genera la pripiedad tabBarIcon con una arrowFunction
      tabBarIcon: ({ focused, color, size }) => {
        // #8 Se crea variable que alamcena el nombre del Icono en cuestion
        let nameIcon='';
        // #9 Generamos un switch que, en base al nombre rescatado de la screen, establece un nombre de icono u otro
        switch(route.name){
          case 'Principal':
            nameIcon= focused ? 'create' : 'create-outline';
          break;
          case 'Estadisticas':
            nameIcon= focused ? 'trophy' : 'trophy-outline';
          break;
        }
        return <Icon name={nameIcon} color={ color } size={ size } />
      }
    })}
    
    >
        {/* Screen Habitos */}
      <Tab.Screen 
        name='Principal' 
        component={ HabitsScreen } 
        options={{
          tabBarLabel: 'Home',
          headerShown: true,
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={()=>navigatio.dispatch(DrawerActions.openDrawer)}>
                <Icon name='reorder-three' color='dark' size={ 30 } style={{ marginLeft: 10 }} />
              </TouchableOpacity>
            );
          },
        }}
      />
        {/* Screen Add */}

        {/* Screen Tareas */}
        {/* Screen Productividad */}
      <Tab.Screen 
        name='Estadisticas' 
        component={ PointsScreen } 
        options={{
          tabBarLabel: 'Statistics',
          headerShown: true,
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={()=>navigatio.dispatch(DrawerActions.openDrawer)}>
                <Icon name='reorder-three' color='dark' size={ 30 } style={{ marginLeft: 10 }} />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Tab.Navigator>
  )
}