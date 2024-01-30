import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './src/signup';
import Signin from './src/sigin';
import AuthNav from './src/navigation/auth';


export default function App() {
  return (
    <View style={styles.container}>
    <AuthNav/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
   
  },
});
