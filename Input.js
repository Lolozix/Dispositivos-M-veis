import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

export default function App() {
  const [text, setText] = useState('');

  return (
    <View style={{padding: 10}}>
      <Text style={{textAlign: "center",
                    backgroundColor: 'grey',
                    fontWeight: 'bold'}}>
        Pizza Tradutor
      </Text>
      <TextInput
        style={{height: 40, borderWidth: 1}}
        placeholder="Digite algo para traduzir:"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text.split('').map((word) => word).join('')}
      </Text>
    </View>
  );
}
