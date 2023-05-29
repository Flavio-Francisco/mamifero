import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabsRoutes } from './src/screens/Root';


const Starck = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Starck.Navigator 
       screenOptions={{
        headerShown :false,
        
     }}
      >
        <Starck.Screen
         name='TabsRoutes' 
         component={TabsRoutes}/>
      </Starck.Navigator>
    </NavigationContainer>
  );
}

