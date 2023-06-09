import { View,Text,StyleSheet } from "react-native";
import { TypeGolfinho } from "../@types/TypeGolfinho";


interface Props{
    item:TypeGolfinho,
}

export function Card({item}:Props){
    var marine:string;
if (item.marine === true) {
    marine = 'Oceanos'
}else{
    marine = 'Rios'
}

return(
    <View style={style.conteiner}>
        
        <Text style={style.text}>Nome: {item.name}</Text>
        <Text style={style.text}>Características: {item.characteristics}</Text>
        <Text style={style.text}>espécie: {item.species}</Text>
        <Text style={style.text}>Habitat: {marine}</Text>
    </View>
)
}

const style= StyleSheet.create({
    conteiner:{
        margin:5,
        marginTop:25,
        flex:1,
        backgroundColor:'#E8F1F2',
        borderLeftWidth:10,
        borderRadius:10,
        padding:10,
        
    },
    text:{
        borderRadius:10,
        backgroundColor:'#E8F1F2',
        fontSize:20,
        color:'black'

    }
})