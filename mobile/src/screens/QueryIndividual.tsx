import { useEffect, useState } from "react";
import { View,Text, TextInput,StyleSheet, TouchableOpacity, Alert, FlatList } from "react-native";
import { api } from "../services/axios";
import { Card } from "../componets/Card";
import { TypeGolfinho } from "../@types/TypeGolfinho";






export function   QueryInd(){
    var [golfinho, setGolfinho] = useState<TypeGolfinho[]>([] as TypeGolfinho[])
    var[name, setName] = useState('')
    async function queryGolfinho() {
        try {
            console.log(name);
            
            const result = await api.get(`/query/${name}`)
            console.log(result.data);  
            setGolfinho(result.data) 
            console.log(golfinho);  
            
        } catch (error) {
            console.log(error);
            
        }
       
    
    } 
     

return(
    <View style={style.conatiner}>

        
        <View style={style.conatiner}>
           <FlatList
           data={golfinho}
           keyExtractor={item => item.name}
           renderItem={(item)=><Card item={item.item}/>}
           />  
        </View>

        <TextInput
         style={style.textInput}
         placeholder="digite o nome do golfinho"
         value={name}
         onChangeText={setName}
         
        />
        <TouchableOpacity
            style={style.button}
            onPress={queryGolfinho}
        
       ><Text style={style.text}>Buscar</Text></TouchableOpacity>
    </View>
);
}

const style = StyleSheet.create({
    conatiner:{
        height:"100%",
        flex:1,
        alignItems:'center',
        justifyContent:'space-between',
        
    },
    button:{
        backgroundColor:'#9999',
        padding:20,
        marginBottom:150,
        borderRadius:10,
        width:'50%',
    },
    text:{
        textAlign:'center',
        fontSize:20,
    },
    textInput:{
        backgroundColor:'gray',
        padding:20,
        marginBottom:35,
        borderRadius:10,
        width:'90%',
        borderEndColor:'white'
    }
})