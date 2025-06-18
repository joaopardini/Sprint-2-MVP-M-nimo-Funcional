import React, { createContext, useState } from 'react';

export const EntregaContext = createContext();

export const EntregaProvider = ({ children }) => {
  const [entregas, setEntregas] = useState([
    { id: 1, origem: 'Galpão A', destino: 'Setor B', status: 'Pendente' },
    { id: 2, origem: 'Galpão B', destino: 'Setor D', status: 'Pendente' },
  ]);

  const iniciarEntrega = (id, navigation) => {
    setEntregas(entregas.map(e =>
      e.id === id ? { ...e, status: 'Em Andamento' } : e
    ));
    navigation.navigate('Rota', { entregaId: id });
  };

  const concluirEntrega = (id, navigation) => {
    setEntregas(entregas.map(e =>
      e.id === id ? { ...e, status: 'Concluída' } : e
    ));
    navigation.navigate('Dashboard');
  };

  return (
    <EntregaContext.Provider value={{ entregas, iniciarEntrega, concluirEntrega }}>
      {children}
    </EntregaContext.Provider>
  );
};