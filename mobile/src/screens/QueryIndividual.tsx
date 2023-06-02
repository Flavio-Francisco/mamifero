import { useEffect, useState } from "react";
import { View,Text, TextInput,StyleSheet, TouchableOpacity, Alert, FlatList } from "react-native";
import { api } from "../services/axios";
import { Card } from "../componets/Card";
import { TypeGolfinho } from "../@types/TypeGolfinho";






export function   QueryInd(){

    var [name, setName] = useState<TypeGolfinho[]>([] as TypeGolfinho[])
    var[data, setData] = useState('')
    
  async function queryGolfinho() {
  
   try {      
        console.log(data); 
        await api.post('/query',{data})
        .then(response => {
          console.log(response.data);  
        setName(response.data);
         console.log(response.data);
        
        })
        .catch(error => {
        console.log(error);
        });
        } catch (error) {
    console.log(error);
    Alert.alert('algo deu Errado!')
    useEffect(()=>{
        queryGolfinho();
    },[])
    
   }  
  }
   

return(
    <View style={style.conatiner}>

        
        <View style={style.conatiner}>
           <FlatList
           data={name}
           keyExtractor={item => item.name}
           renderItem={(item)=><Card item={item.item}/>}
           />  
        </View>

        <TextInput
         style={style.textInput}
         placeholder="digite o nome do golfinho"
         value={data}
         onChangeText={setData}
         
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