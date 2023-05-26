import { useNavigation } from "@react-navigation/native";
import { View, Text,StyleSheet, Button } from "react-native";


export function Register(){

const navigation = useNavigation();

function openScreens(){
    navigation.navigate('Home')
}

    return(
        <View style={style.hearder}>
            <Text>por tudo!!!!</Text>
            <Button
        title="voltar para Home"
        onPress={openScreens}
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