import React from 'react';
import {SafeAreaView, TextInput} from 'react-native';


export default function Calculadora (){


  return (
    <SafeAreaView>
      <TextInput
        placeholder="Peso"
        keyboardType='numeric'

      />    
      <TextInput
        placeholder="Altura"
        keyboardType='numeric'

      />    
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create ({
  caixa01:{
    borderWidth: 10,
  }
});
