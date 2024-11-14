
import { Stack } from "expo-router";
import LinearGradient from '@/components/LinearGradient/LinearGradient'
import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen'; 
import {useEffect} from 'react';
import Icon from '@expo/vector-icons/FontAwesome'
import { TouchableOpacity } from "react-native";
import {useRouter} from 'expo-router'
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router  = useRouter()
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
           return <LinearGradient style={{flex:1}}/>
        },
        headerTitle:"Student Login", headerTitleAlign:'center',
        headerLeft:()=><TouchableOpacity activeOpacity={1} onPress={()=>router.back()}>
          <Icon name="chevron-left" size={18} color={'#fff'}
          style={{marginLeft:'3%'}}/></TouchableOpacity>,
        headerTitleStyle:{color:'#FFFFFF',fontFamily:'Poppins-Regular'},
        headerBackButtonMenuEnabled:true,
      }} />
    </Stack>
  );
}

