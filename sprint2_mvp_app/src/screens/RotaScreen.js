import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { EntregaContext } from '../context/EntregaContext';

export default function RotaScreen({ route, navigation }) {
  const { concluirEntrega } = useContext(EntregaContext);
  const { entregaId } = route.params;

  return (
    <View>
      <Text>Acompanhamento da Rota</Text>
      <Button title="Concluir Entrega" onPress={() => concluirEntrega(entregaId, navigation)} />
    </View>
  );
}