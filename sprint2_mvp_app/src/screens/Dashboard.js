import React, { useContext } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { EntregaContext } from '../context/EntregaContext';
import { AuthContext } from '../context/AuthContext';

export default function Dashboard({ navigation }) {
  const { entregas, iniciarEntrega } = useContext(EntregaContext);
  const { logout } = useContext(AuthContext);

  return (
    <View>
      <Button title="Sair" onPress={logout} />
      <Text>Entregas:</Text>
      <FlatList
        data={entregas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.origem} → {item.destino} ({item.status})</Text>
            <Button title="Iniciar" onPress={() => iniciarEntrega(item.id, navigation)} />
          </View>
        )}
      />
    </View>
  );
}