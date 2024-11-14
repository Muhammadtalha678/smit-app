import { Button, Text, View } from "react-native";
import {useRouter} from 'expo-router'
export default function Index() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello World.</Text>
      <Button title="Next Page" onPress={()=>router.push('/dashboard')}/>
    </View>
  );
}
