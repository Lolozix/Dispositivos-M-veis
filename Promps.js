import { Text, View } from 'react-native';

const DetalheProduto = (props) => {
  return(
    <View style={{ borderWidth: 1, borderColor: 'purple', marginBottom: 10, padding: 10 }}>
      <Text style={{ color: 'orchid' }}>Produto: {props.name}</Text>
      <Text style={{ color: 'orchid' }}>Marca: {props.marca}</Text>
      <Text style={{ color: 'orchid' }}>Preço: {props.Preco}</Text>
    </View>
  )
}

export default function App() {
  return (
    <View style={{ backgroundColor: 'purple', padding: 10 }}>
      <DetalheProduto name="Mochila" marca="Dell" Preco="R$99.00"/>
      <DetalheProduto name="Mouse" marca="Razer" Preco="R$150.00"/>  
      <DetalheProduto name="Memória Ram" marca="Kingston" Preco="R$200.00"/> 
    </View>
  );
}
