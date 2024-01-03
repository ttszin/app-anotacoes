import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Button,ScrollView,TextInput, KeyboardAvoidingView , span } from 'react-native';
import React from 'react';
import Header  from './Componentes/Header.js';
import Body  from './Componentes/Body.js';
import Footer  from './Componentes/Footer.js';
import styleExterno from './src/Login/styles.js';
import { useState } from 'react';
import Pdf  from 'react-native-pdf';










function App() {
	const [counter, setCounter] = useState(0);
	const [password, SetPassword] = useState('Insira a senha aqui');
	var senha = 'riogrande.123';
	if (counter===1 && password===senha){
		while(counter===1){
			return(
				<ScrollView style={{marginTop:20,flex:1}} > 
					<StatusBar hidden = {true}/>
					<Logo></Logo>
					<Header></Header>
					<Body></Body>
					<Footer></Footer>
				</ScrollView>
				
			);
		}
	}else{
		return(
				<View style={styleExterno.fundo}>
					<KeyboardAvoidingView contentContainerStyle={styleExterno.box} behavior="position" enabled>
						<StatusBar hidden = {true}/>
						<Text style={styleExterno.texto}>Bem vindo ao PG de Bolso !!</Text>
						<Text style={styleExterno.texto2}>Digite a senha para acessar o conteúdo</Text>
						<TextInput 
							style = {styleExterno.textoinput}
							placeholder = 'Insira a senha aqui'
							placeholderTextColor={'white'}
							onChangeText={(val) => SetPassword(val)}
												
						/>
						<Text style={{paddingBottom:25,color:'white'}}>Senha Inserida : {password}</Text> 
					

						<Button
							color={'#191dff'}
							title="ENTRAR"	 

							onPress={
								() =>  setCounter(1)
							}
						/>  
					</KeyboardAvoidingView>

					
						
				</View>
		
		);
		
	}
	
}




export default App;






const Logo = () => {
  return(
	
    <Image style={{flex:1,alignSelf:'center',marginTop:10,width:300,height:70}} 
      source={{
        uri:'https://s3.amazonaws.com/atsprd/ats/202107201414140864-bunge-logo.png',
      }}
    /> 
  );
}

