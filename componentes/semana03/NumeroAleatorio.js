import React from 'react';
import { Text } from 'react-native';

const NumeroAleatorio = ({ min, max }) => {

  const Number = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <Text>O número aleatório é: {Number}</Text>
    );
};

export default NumeroAleatorio;