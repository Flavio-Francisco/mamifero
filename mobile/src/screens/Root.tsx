import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Register } from './Register';
import { Query } from './Query';
import { Delete } from './Delete';
import { Ionicons } from '@expo/vector-icons';




const Tab = createBottomTabNavigator();

export function TabsRoutes() {
  return (
    <Tab.Navigator
    screenOptions={{
     title:'Lista de Golfinhos',
       tabBarShowLabel :false,
    }}
    >
      <Tab.Screen
        options={{
            
            tabBarIcon:()=> <Ionicons name={'search-outline'} size={25}  />
                  
           }}
        name="Query" component={Query} 
       />

     <Tab.Screen
        options={{
            tabBarIcon:()=><Ionicons name={'add-outline'} size={25} />
        }}
          
        name="Home1" component={Register} 
       />

      
       <Tab.Screen
        options={{
            tabBarIcon:()=><Ionicons name={'ios-trash-outline'} size={25}/>
        }}

      name="Home3" component={Delete} 
       />

       
    </Tab.Navigator>
    
  );
}