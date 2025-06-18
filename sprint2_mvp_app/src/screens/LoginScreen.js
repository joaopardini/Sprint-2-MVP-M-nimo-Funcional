import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen({ navigation }) {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View>
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <Text>Senha:</Text>
      <TextInput secureTextEntry value={senha} onChangeText={setSenha} />
      <Button title="Entrar" onPress={() => login(email, senha, navigation)} />
    </View>
  );
}