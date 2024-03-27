import { Text, View, Button } from 'react-native';
import React, { useState } from 'react'; 

const Clickavel = (props) => {
  const [isClicked, setIsClicked] = useState(true); 

  return (
    <View>
      <Text>Esse é {props.name} - {isClicked ? "Clique-me" : "Clickado"}</Text>
      <Button 
        onPress={() => setIsClicked(false)} 
        disabled={!isClicked}
        title={isClicked ? "Clique-me" : "Obrigado"} 
      />
    </View>
  );
}

export default function App() {
  return (
    <>
      <Clickavel name="Botão1" /> 
      <Clickavel name="Botão2" /> 
    </>
  );
}
