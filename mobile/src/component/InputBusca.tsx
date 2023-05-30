
import {TextInput , StyleSheet,Text, Button, View, Alert } from 'react-native';
import { useState , useEffect} from "react";
import { api } from '../services/axios';




export function InputBusca(){
    const [name, setName] = useState('')
      async function queryGolfinho() {
        
        try{
            await api.get('/query')
            .then((respose)=>{
                const obj =(respose.statusText)
                setName(obj)
            })
        }catch{
            Alert.alert('golfinho não encotrado!!',)
        
      }  
    return(
        <View>
        <TextInput
           placeholder='digite o nome do golfinho'
           onChangeText={setName}
           />
        </View>
    )
}


}
