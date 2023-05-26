import { useNavigation } from "@react-navigation/native";
import { View, Text,StyleSheet, Button } from "react-native";


export function Home(){

const navigation = useNavigation();

 function openSreens(){
    navigation.navigate('Register')
 }

    return(
        <View style={style.hearder}>
            <Text>Obrigado Deus!!!!</Text>
            <Button
            title="vamos para cadastro"
            onPress={openSreens}
            />
        </View>
    );
}

const style = StyleSheet.create({

    hearder:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})