import React from 'react';
import { View, Text } from 'react-native';

const MinMax = ({ min, max }) => {
  const maiorValor = min > max ? min : max;

  return (
    <View>
      <Text>{maiorValor} é maior que {min === maiorValor ? max : min}</Text>
    </View>
  );
};

export default MinMax;
