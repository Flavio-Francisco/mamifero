import { useEffect, useState } from "react";
import { View,Text, TextInput,StyleSheet, TouchableOpacity, Alert } from "react-native";
import { api } from "../services/axios";
import { TypeGolfinho } from "../@types/TypeGolfinho";




export function Delete(){

    const [named, setName] = useState('');

  async function deleteGolfinho() {
    
     try {
        console.log(named);
        
        await api.delete('/delete',{
           data:{
            name: named
           }
        })
        Alert.alert('Golfinho deletado com sucesso!!!')
        
     } catch (error) {
        console.log(error);
        
        
     }
        
 
  }
   
return(
    <View style={style.conatiner}>
        <TextInput
         style={style.textInput}
        placeholder="Qual o golfinho você vai apagar?"
        value={named}
        onChangeText={setName}
        />
        <TouchableOpacity
            style={style.button}
            onPress={deleteGolfinho}
        
       ><Text style={style.text}>Apagar</Text></TouchableOpacity>
    </View>
);
}

const style = StyleSheet.create({
    conatiner:{
        backgroundColor:'#13293D',
        height:"100%",
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        
       
    },
    textInput:{
        backgroundColor:'#E8F1F2',
        padding:20,
        marginBottom:50,
        borderRadius:10,
        fontSize:20,
        width:'90%',
        
    },
    button:{
        marginTop:150,
        backgroundColor:'#006496',
        padding:20,
        borderRadius:10,
        width:'50%',
    },
    text:{
        textAlign:'center',
        fontSize:20,
    }
})