import { useState } from "react";
import { TextInput, TouchableOpacity, View ,StyleSheet,Text, Alert} from "react-native";
import { api } from "../services/axios";
import { useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {RootType} from "../services/RootType";


export function UpdateQuery(){
    
    type HomeSreenProp = NativeStackNavigationProp<RootType,'UpdateQuery'>
    const navigation = useNavigation<HomeSreenProp>()
    const [name,setName] = useState('');
    async function resulQuery() {
      if (!name.trim()) {
        Alert.alert('Por favor digite o nome do Golfinho!!')
      }
      await api.get(`query/${name}`)
      .then((respose=>{
          if (respose.data) {
              console.log(respose.data);
              navigation.navigate('UpdateQuery',{name})
             setName('')
          }
      }))

    }


return(
    <View style={style.conatiner}>

        <TextInput
         style={style.textInput}
         placeholder="Qual o nome do golfinho?"
        value={name}
        onChangeText={setName}
        
        />

        <TouchableOpacity
            style={style.button}
            onPress={resulQuery}
            ><Text style={style.text}>Buscar</Text></TouchableOpacity>
    </View>
)
}
const style = StyleSheet.create({
    conatiner:{
        backgroundColor:'#13293D',
        height:"100%",
        flex:1,
        alignItems:'center',
        justifyContent:"space-around"
        
       
    },
    button:{
        backgroundColor:'#006494',
        padding:20,
        borderRadius:10,
        width:'50%',
    },
    text:{
        textAlign:'center',
        fontSize:20

    },
    textInput:{
        backgroundColor:'#e8F1F2',
        padding:20,
        marginBottom:35,
        borderRadius:10,
        width:'90%',
        fontSize:20
       
    }

    })