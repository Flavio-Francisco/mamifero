import{View,Text, TouchableOpacity,StyleSheet, TextInput}from 'react-native';
import { useState } from 'react';
import { api } from '../services/axios';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootType } from '../services/RootType';

export function Update(){
    const[name, setName]=useState('');
    const[especie, setEspecie]=useState('');
    const[caracteristica, setCaracteristica]=useState('');
    const[habitat,setHabitat]=useState('');
    
       async function UpdateGolfinho() {
        var local: boolean = true ? habitat == "marinho" : local = false
        console.log(name);
        console.log(especie);
        console.log(caracteristica);
        console.log(local);

        type HomeSreenProp = NativeStackNavigationProp<RootType,'UpdateQuery'>

        const navigation = useNavigation<HomeSreenProp>()

        const pushNavegation = navigation.push('UpdateQuery',{name})

       const result =  await api.put(`/update/${pushNavegation}`,
       {
        name: name,
        species: especie,
        characteristics: caracteristica,
        marine: local
        })
        console.log(result.data)

       }      

    

    return(
        <View style={style.conatiner}> 
            <TextInput
            style={style.textInput}
            placeholder='Digite o nome'
            value={name}
            onChangeText={setName}
            />
            <TextInput
            style={style.textInput}
            placeholder='Digite a espécie'
            value={especie}
            onChangeText={setEspecie}
            />
            <TextInput
            style={style.textInput}
            placeholder='Digite as caracteristicas '
            value={caracteristica}
            onChangeText={setCaracteristica}

            />
            <TextInput
            style={style.textInput}
            placeholder='Digite o habitat'
            value={habitat}
            onChangeText={setHabitat}
            />
              <TouchableOpacity
            style={style.button}
            onPress={UpdateGolfinho}
          
            ><Text style={style.text}>Atulalizar</Text></TouchableOpacity>
        </View>
    );
}
const style = StyleSheet.create({
      conatiner:{
        backgroundColor:'#13293D',
        height:"100%",
        marginTop:"20%",
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