import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native'
import Bulhacha from './componentes/Bulhacha';
import Contador from './componentes/semana 4/Contador';

export default function App() {
  return (
    <View style={styles.container}>
      {/*<Bulhacha></Bulhacha>*/}
      <Contador></Contador>
      {/*  <Text>Altere Aqui</Text>
      <StatusBar style="auto" />
      <Image source={require('./assets/favicon.png')} />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF4500',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
