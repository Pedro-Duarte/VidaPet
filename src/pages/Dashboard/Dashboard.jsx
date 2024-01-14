import React, { useState } from 'react';
import UserInfo from './Components/UserInfo';
import PetList from './Components/PetList';
import Notifications from './Components/Notifications';

const Dashboard = () => {
  // Estado para gerenciar informações do usuário
  const [user, setUser] = useState({
    name: 'Nome do Usuário',
    email: 'usuario@example.com',
    // Outras informações do usuário
  });

  return (
    <div>
      
    </div>
  );
};

export default Dashboard;