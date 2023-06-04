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
  useEffect(()=>{
    queryGolfinho();
  },[Card])

    return(
        <View style={style.conatiner}>
           <FlatList
           data={name}
           keyExtractor={item => item.name}
           renderItem={(item)=><Card item={item.item}/>}
           />
        </View>
    );
}

const style = StyleSheet.create({
    conatiner:{
        height:"100%",
        backgroundColor:'#13293D',
        flex:1,
        alignItems:'center',
        
       
    },
   
    text:{
        textAlign:'center',
        fontSize:20,
    }
})