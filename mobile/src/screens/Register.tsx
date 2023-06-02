import{View,Text, TouchableOpacity,StyleSheet, TextInput}from 'react-native';
import { useState } from 'react';
import { api } from '../services/axios';

export function Register(){
    const[name, setName]=useState('');
    const[especie, setEspecie]=useState('');
    const[caracteristica, setCaracteristica]=useState('');
    const[habitat,setHabitat]=useState('');
    
       async function createGolfinho() {
        var local: boolean = true ? habitat == "marinho" : local = false
        console.log(name);
        console.log(especie);
        console.log(caracteristica);
        console.log(local);
        
       const result =  await api.post('/post',{
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
            onPress={createGolfinho}
          
            ><Text style={style.text}>Criar</Text></TouchableOpacity>
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
        borderRadius:10,
        width:'50%',
    },
    text:{
        textAlign:'center',
        fontSize:20

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