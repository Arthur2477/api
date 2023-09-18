import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native'
import Bulhacha from './componentes/Bulhacha';
import Contador from './componentes/semana 4/Contador';
import NumeroAleatorio from './componentes/semana03/NumeroAleatorio';
import Profile from './componentes/semana03/Profile';
import Minmax from './componentes/MinMax';
import MinMax from './componentes/MinMax';


export default function App() {
  return (
    <View style={styles.container}>
      <MinMax min={20} max={10}/>
      {/*<Profile></Profile>
      <Bulhacha></Bulhacha>
       <Contador></Contador>
        <Text>Altere Aqui</Text>
      <StatusBar style="auto" />
      <Image source={require('./assets/favicon.png')} />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
