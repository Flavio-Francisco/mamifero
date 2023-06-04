import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TabsRoutes } from './src/screens/Root';
import { StackRoutes } from './src/screens/Rootupdate';


const Starck = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>


      <Starck.Navigator 
       screenOptions={{
        headerShown :false,
        headerStyle:{
          backgroundColor:'#13293D',
        }
     }}
      >
        <Starck.Screen
         options={{
          headerShown:false,
          headerStyle:{
            backgroundColor:'#13293D',
          }
         }}
        
         name='TabsRoutes' 
         component={TabsRoutes}/>
         

      </Starck.Navigator>
    </NavigationContainer>
  );
}

