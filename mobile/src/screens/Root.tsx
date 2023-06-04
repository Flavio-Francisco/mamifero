import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Register } from './Register';
import { Query } from './Query';
import { Delete } from './Delete';
import { Ionicons } from '@expo/vector-icons';
import { QueryInd } from './QueryIndividual';

import { UpdateQuery } from './UpdateQuery';




const Tab = createBottomTabNavigator();

export function TabsRoutes() {
  return (
    <Tab.Navigator>

      <Tab.Screen
        options={{
          title:'Golfinhos Cadastrados',
          headerTitleAlign:'center',
          headerStyle:{
            backgroundColor:'#13293D'
          },
            tabBarIcon:()=> <Ionicons name={'list-outline'} size={25}  />
                  
           }}
        name="Query" component={Query} 
       />
      
      <Tab.Screen
        options={{
          title:'Pesquisar',
          headerTitleAlign:'center',
          headerStyle:{
            backgroundColor:'#13293D'
          },
         
            tabBarIcon:()=><Ionicons name={'search-sharp'} size={25} />
        }}
          
        name="Home4" component={QueryInd} 
       />

     <Tab.Screen
        options={{
          title:'Cadastra Novo Golfinho',
          headerTitleAlign:'center',
          headerStyle:{
            backgroundColor:'#13293D'
          },
        
            tabBarIcon:()=><Ionicons name={'add-outline'} size={25} />
        }}
          
        name="Home1" component={Register} 
       />

        <Tab.Screen
        options={{
            title:'Editar Registro',
            headerTitleAlign:'center',
            headerStyle:{
              backgroundColor:'#13293D'
            },
           
            tabBarIcon:()=><Ionicons name={'create-outline'} size={25} />
        }}
          
        name="Update" component={UpdateQuery} 
       />

       <Tab.Screen
        options={{
          title:'Apagar Registro',
          headerTitleAlign:'center',
          headerStyle:{
            backgroundColor:'#13293D'
          },
           
            tabBarIcon:()=><Ionicons name={'ios-trash-outline'} size={25}/>
        }}

      name="Home3" component={Delete} 
       />

       
    </Tab.Navigator>
    
  );
}