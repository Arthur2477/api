import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native'
import Bulhacha from './componentes/Bulhacha';


export default function App() {
  return (
    <View style={styles.container}>
      <Bulhacha></Bulhacha>
      {/*  <Text>Altere Aqui</Text>
      <StatusBar style="auto" />
      <Image source={require('./assets/favicon.png')} />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8d99ae',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
