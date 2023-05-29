import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './Home';
import { Register } from './Register';
import { Query } from './Query';
import { Delete } from './Delete';




const Tab = createBottomTabNavigator();

export function TabsRoutes() {
  return (
    <Tab.Navigator
    screenOptions={{
       headerShown :false,
       tabBarStyle:{
        backgroundColor:"#000",
       },
       tabBarShowLabel :false,
    }}
    >
      <Tab.Screen
        name="Home" component={Home} 
       />

     <Tab.Screen
          
        name="Home1" component={Register} 
       />

        <Tab.Screen
       name="Home2" component={Query} 
       />

       <Tab.Screen
      name="Home3" component={Delete} 
       />

       
    </Tab.Navigator>
    
  );
}