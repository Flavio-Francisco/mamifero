
import {TextInput , StyleSheet,Text, Button } from 'react-native';
import { useState } from "react";


export function InputBusca(){
    const [golfinho , setGolfinho] = useState('')
    return(
        <>
         <Text>{golfinho}</Text>
        <TextInput placeholder='Digite o nome do golfinho'
        onChangeText={setGolfinho}
        />
        <Button title='Buscar'
        
        />
        
         </>
    )
}



