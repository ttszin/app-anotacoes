import React from 'react';
import { StyleSheet, Text, View,Image,Button } from 'react-native';


const Header = () =>{
    return(
        <View style={{backgroundColor: 'rgb(15, 51, 252)',padding:20,marginTop:20}}>   
            <Text style={{textAlign:'center',fontsize:30,color:'white'}}>SELECIONE O PDF PARA LEITURA</Text>
        </View>
    );
}

export default Header;

