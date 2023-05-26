
import {NavigationContainer } from '@react-navigation/native';
import{createNativeStackNavigator} from '@react-navigation/native-stack';
import { Home } from './src/screens/Home';
import { Register } from './src/screens/Register';

export default function App() {
  const Strack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Strack.Navigator>
        <Strack.Screen 
        name='Home' 
        component={Home}
        options={{title:'Seja Bem Vindo!'}}
        />
        <Strack.Screen
         name='Register'
          component={Register}
          options={{title:'Registre os dados do Golfinho'}}
          />
      </Strack.Navigator>
    </NavigationContainer>
  );
}


