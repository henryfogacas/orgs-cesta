import Cesta from '../src/telas/Cesta';
import { StatusBar, SafeAreaView, View } from 'react-native'
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

const App = () => {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  })
  if (!fonteCarregada) {
    return <View></View>
  }

  return <SafeAreaView>
    <StatusBar />
    <Cesta />
  </SafeAreaView>
}

export default App;