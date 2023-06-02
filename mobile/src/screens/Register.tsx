import{View,Text, TouchableOpacity,StyleSheet, TextInput}from 'react-native';
import { useState } from 'react';

export function Register(){
    const[name, setName]=useState('');
    const[especie, setEspecie]=useState('');
    const[caracteristica, setCaracteristica]=useState('');
    const[Habitat,setHabitat]=useState(0);
    
    

    return(
        <View style={style.conatiner}> 
            <TextInput
            style={style.textInput}
            placeholder='Digite o nome'
            />
            <TextInput
            style={style.textInput}
            placeholder='Digite a espécie'
            />
            <TextInput
            style={style.textInput}
            placeholder='Digite as caracteristicas '
            />
            <TextInput
            style={style.textInput}
            placeholder='Digite o habitat'
            />
              <TouchableOpacity
            style={style.button}
          
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