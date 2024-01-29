import { StatusBar, SafeAreaView, View } from 'react-native'
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import Cesta from '../src/telas/Cesta/Cesta';
import mocksCesta from '../src/mocks/mocks';

const App = () => {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  })
  if (!fonteCarregada) {
    return <AppLoading />
  }

  return <SafeAreaView>
    <StatusBar />
    <Cesta {...mocksCesta}/>
  </SafeAreaView>
}

export default App;