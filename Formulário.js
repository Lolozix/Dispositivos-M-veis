import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function Header() {
  return (
    <View style={{ flex: 1, width: '100%', backgroundColor: 'indigo', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'white', fontSize: 20 }}>JIFENA 2024 - FICHA DE CADASTRO</Text>
    </View>
  )
}

function Footer() {
  return (
    <View style={{ width: '100%', backgroundColor: 'indigo', alignItems: 'center', justifyContent: 'center', height: 50 }}>
      <Text style={{ color: 'white', fontSize: 20 }}>Footer - PDM1 © 2024</Text>
    </View>
  )
}

export default function App() {
  return (
    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'purple', padding: 5 }}>
      <Header />
      <View style={{ flex: 6, backgroundColor: 'pink', padding: 10 }}>
        <Text style={{ color: 'purple', fontSize: 16, marginBottom: 5 }}>Nome:</Text>
        <TextInput style={{ height: 40, borderColor: 'purple', borderWidth: 1, marginBottom: 10 }} />
        <Text style={{ color: 'purple', fontSize: 16, marginBottom: 5 }}>Idade:</Text>
        <TextInput style={{ height: 40, borderColor: 'purple', borderWidth: 1, marginBottom: 10 }} />
        <Text style={{ color: 'purple', fontSize: 16, marginBottom: 5 }}>Sexo:</Text>
        <TextInput style={{ height: 40, borderColor: 'purple', borderWidth: 1, marginBottom: 10 }} />
        <Text style={{ color: 'purple', fontSize: 16, marginBottom: 5 }}>Curso:</Text>
        <TextInput style={{ height: 40, borderColor: 'purple', borderWidth: 1, marginBottom: 10 }} />
        <Text style={{ color: 'purple', fontSize: 16, marginBottom: 5 }}>Periodo:</Text>
        <TextInput style={{ height: 40, borderColor: 'purple', borderWidth: 1, marginBottom: 10 }} />
         <Button title="Enviar" onPress={() => {}} color="purple" />
      </View>
      <Footer />
    </View>
  );
}
