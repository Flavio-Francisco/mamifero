
import { UpdateQuery } from './UpdateQuery';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Update } from './Update';




const Tab = createNativeStackNavigator();
export function StackRoutes() {
  return (
    <Tab.Navigator
    screenOptions={{
     headerShown:false,
     headerStyle:{
      backgroundColor:'#13293D',
    }
    }}
    >
     
     <Tab.Screen
        options={{
          headerShown:false,
          headerStyle:{
            backgroundColor:'#13293D',
          }
        }}
          
        name="Home1" component={Update} 
       />

        <Tab.Screen
        options={{
          headerShown:false,
          headerStyle:{
          backgroundColor:'#13293D',
          }
        }}
          
        name="Update" component={UpdateQuery} 
       />

    </Tab.Navigator>
    
  );
}