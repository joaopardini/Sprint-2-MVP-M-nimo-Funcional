# Sprint 2 – MVP Mínimo Funcional

Este é o projeto desenvolvido em React Native utilizando Expo, que simula um sistema de entregas com autenticação mock, navegação entre telas e manipulação de dados usando Context API.

## ✅ Funcionalidades

- Autenticação (Login e Logout) simulada
- Navegação entre telas com React Navigation
- Mock de dados para coletas e entregas
- Atualização de status da entrega (Iniciar e Concluir)
- Interface funcional via simulador/emulador ou Expo Go

## 📁 Estrutura

```
App.js
src/
 ├── context/
 │    ├── AuthContext.js
 │    └── EntregaContext.js
 └── screens/
      ├── LoginScreen.js
      ├── Dashboard.js
      └── RotaScreen.js
```

## 🚀 Como rodar o projeto

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor Expo**
   ```bash
   npx expo start
   ```

4. **Execute o app**
   - Use um emulador Android/iOS **ou**
   - Escaneie o QR Code com o app **Expo Go** no seu celular

## 🛠️ Requisitos

- Node.js
- Expo CLI (`npm install -g expo-cli`)
- Git (para clonar o projeto)

## 📌 Observações

- O login é simulado (mock), não há backend envolvido.
- O status da entrega é gerenciado via Context API.
- As rotas são definidas usando React Navigation.
