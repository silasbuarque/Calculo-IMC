import React, {useState} from 'react';
import {Text, SafeAreaView, TextInput, StyleSheet, View, TouchableOpacity, Alert} from 'react-native';


export default function Calculadora (){

  const [peso, setPeso] = useState()
  const [altura, setAltura] = useState()

  const calcularIMC = () => {
    if(!peso || !altura){
      return Alert.alert('ERRO','Preencha os campos')
    }

    let calcular = (Number(peso) / (Number(altura) * Number(altura))).toFixed(2)
    let categoria

    if (calcular <= 18.5){
      categoria = 'Magreza'
    } else if (calcular <= 24.9) {
      categoria = 'Peso Normal'
    } else if (calcular <= 29.9) {
      categoria = 'Sobrepeso'
    } else if (calcular <= 34.9) {
      categoria = 'Obesidade de Grau I'
    } else if (calcular <= 39.9) {
      categoria = 'Obesidade de Grau II'
    } else {
      categoria = 'Obesidade de Grau III'
    }

    alertaIMC(categoria)

  }

  const alertaIMC = categoria =>{

    Alert.alert('Mensagem',`Seu nível de IMC é: ${categoria}`)

  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.textoTitulo}>Calculadora de IMC</Text>
      </View>
      <View style={styles.caixas}>
        <TextInput
          style={styles.caixaInput}
          placeholder="Peso"
          keyboardType='numeric'
          placeholderTextColor="#04d361"
          value={peso}
          onChangeText={(text)=> setPeso (text)}
        />    
        <TextInput
          style={styles.caixaInput}
          placeholder="Altura"
          keyboardType='numeric'
          placeholderTextColor="#04d361"
          value={altura}
          onChangeText={(text)=> setAltura (text)}
        />    
      </View>
      <View>
        <TouchableOpacity onPress={calcularIMC} style={styles.botao}>
              <Text style={styles.txtBotao}>Calcular</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#29292e',
    justifyContent:'center',
    alignItems:'center',
  },
  textoTitulo:{
    fontSize:30,
    color: '#04d361',
    marginTop: -50,
  },
  caixas:{
    flexDirection:'row'
  },
  caixaInput:{
    margin: 20 ,
    borderWidth: 2,
    paddingHorizontal: 30,
    borderRadius: 25,
    paddingVertical: 10,
    borderColor: '#04d361',
    fontSize: 20,
    marginTop: 100,
    color: '#04d361',
  },
  botao:{
    backgroundColor: '#04d361',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 80,
  },
  txtBotao:{
    color: "#29292e",
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "bold",
  },
});