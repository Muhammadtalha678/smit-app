import { smitPrimary, smitSecondary } from "@/constants/Colors";
import { Stack } from "expo-router";
import {LinearGradient} from 'expo-linear-gradient'
import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen'; 
import {useEffect} from 'react';
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Poppins-Bold':require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular':require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold':require('../assets/fonts/Poppins-SemiBold.ttf'),
  })
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
 
  if (!loaded && !error) {
    return null;
  }
  return (
    <Stack>
      {/* <Stack.Screen name="index" /> */}
      <Stack.Screen name="login/index"  options={{
        headerBackground: () => {
           return <LinearGradient colors={[smitSecondary,smitPrimary]} style={{flex:1}}
            start={{x:0,y:0}} end={{x:1,y:0}}></LinearGradient>
        },
        headerTitle:"Student Login", headerTitleAlign:'center',
        headerTitleStyle:{color:'#FFFFFF',fontFamily:'Poppins-Regular'},
        headerBackButtonMenuEnabled:true
      }} />
    </Stack>
  );
}

