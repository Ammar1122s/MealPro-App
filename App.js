import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button} from 'react-native';
import CategoryScreen from './Screens/CategoryScreen';
import CategoryTile from './Components/CategoryTile';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createDrawerNavigator} from "@react-navigation/drawer"
import MealOverview from './Screens/MealOverview';
import MealSteps from './Screens/MealSteps';
import Fav from './Screens/Fav';
import {Ionicons} from "@expo/vector-icons"
import FavContextsProvider from './store/context/Fav_Context';


function DrawerNavigation (){
  return(
    <Drawer.Navigator screenOptions={{
      headerTitleStyle:{
        fontSize:20,
        color:"white"
      },
      headerTitleAlign:"center",
      headerStyle:{
        backgroundColor:"grey"
      },
      sceneContainerStyle:{
        backgroundColor:"#24180f"
      },
      drawerActiveBackgroundColor:"grey",
      drawerActiveTintColor:"black",
      drawerContentStyle:{
        backgroundColor:"purple"
      },
    
    }}
     >
      <Drawer.Screen name="MealCategory" component={CategoryScreen} options={{
        drawerIcon: ({color,size})=> (<Ionicons name='list' color={color} size={size}/>)
      }
      } />
      <Drawer.Screen name='Favorites' component={Fav} options={{
        drawerIcon: ({color,size})=> (<Ionicons name='star' color={color} size={size}/>),
      }
      }/>
    </Drawer.Navigator>
  )
}

const stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
    <StatusBar style='dark'/>
    <FavContextsProvider>
    <NavigationContainer>
      <stack.Navigator screenOptions={{
          headerTitleStyle:{
            fontSize:20,
            color:"white"
          },
          headerTitleAlign:"center",
          headerStyle:{
            backgroundColor:"grey"
          },
          contentStyle:{
            backgroundColor:"#24180f"
          }
        }}>
        
        <stack.Screen name='Drawer' component={DrawerNavigation} options={{headerShown:false}} />
        <stack.Screen name='MealOverview' component={MealOverview} />
        <stack.Screen name= 'MealSteps' component={MealSteps} />
      </stack.Navigator>

    </NavigationContainer>
    </FavContextsProvider>
 
    </>
  );
}

