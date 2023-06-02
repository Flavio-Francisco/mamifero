import { View,Text,StyleSheet, Alert, TextInput, TouchableOpacity, FlatList} from "react-native";
import { api } from "../services/axios";
import { useEffect, useState } from "react";
import { TypeGolfinho } from "../@types/TypeGolfinho";
import { Card } from "../componets/Card";




export function Query(){
;
  var [name, setName] = useState<TypeGolfinho[]>([])

  async function queryGolfinho() {
    
    const result =  await api.get('/get');
    setName(result.data);
    
    console.log(result.data);
    
 
  }

    return(
        <View style={style.conatiner}>
           <FlatList
           data={name}
           keyExtractor={item => item.name}
           renderItem={(item)=><Card item={item.item}/>}
           />
           <TouchableOpacity
            style={style.button}
            onPress={queryGolfinho}
            
            ><Text style={style.text}>Atualizar</Text></TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    conatiner:{
        height:"100%",
        marginTop:"20%",
        flex:1,
        alignItems:'center',
        
       
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
    }
})