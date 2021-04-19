import React, { useState } from 'react';
import {
  FiLayers, FiSquare, FiUsers, FiMapPin
} from 'react-icons/fi';
import { FaHeart } from "react-icons/fa";
import {
  Menu as IMenu
} from 'antd';

import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
  const [options, setOptions] = useState([
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: <FiSquare />,
    },
    {
      name: 'Cadastrar Contato',
      path: '/contatos',
      icon: <FiLayers />
    },
    {
      name: 'Favoritos',
      path: '/favoritos',
      icon: <FaHeart />
     },
    {
      name: 'Cadastrar Usuário',
      path: '/usuarios',
      icon: <FiUsers />
    },
    {
      name: 'Cadastrar Local',
      path: '/locais',
      icon: <FiMapPin />
    },

  ]);
  return (
    <IMenu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      {options.map((item) => (
        <IMenu.Item key={item.name} icon={item.icon}>
          <Link to={item.path}>{item.name}</Link>
        </IMenu.Item>
      ))}
    </IMenu>
  );
};

export default Menu;
