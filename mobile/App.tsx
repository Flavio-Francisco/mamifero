import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/screens/Home';
import { Query } from './src/screens/Query';
import { TabsRoutes } from './src/screens/Root';


const Starck = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Starck.Navigator >
        <Starck.Screen name='TabsRoutes' component={TabsRoutes}/>
      </Starck.Navigator>
    </NavigationContainer>
  );
}

