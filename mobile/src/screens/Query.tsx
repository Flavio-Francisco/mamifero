import { View,Text,StyleSheet} from "react-native";
import { InputBusca } from '../component/InputBusca';




export function Query(){
  
    

    return(


        <View style={style.conatiner}>
   
            <Text>Olá</Text>
            <InputBusca/>
           
    
        </View>
    );
}

const style = StyleSheet.create({
    conatiner:{
        height:"100%",
        marginTop:"100%",
        flex:1,
        alignItems:'center',
        
       
    }
})