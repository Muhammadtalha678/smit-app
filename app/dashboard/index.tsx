import { View, Text, StyleSheet, ScrollView, TextInput, Image, Dimensions } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { smitPrimary, smitSecondary } from '@/constants/Colors';

const windowHeight = Dimensions.get('window').height;

const Dashboard = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.containerOne}>
        <LinearGradient
          colors={[smitSecondary, smitPrimary]}
          style={styles.imageContainer}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
        </LinearGradient>
          <Image
            source={require('../../assets/images/banner.png')}
            style={{
              position: 'absolute',
              top: 2,
              width: Dimensions.get('window').width /1,
              height: Dimensions.get('window').height/2,
              resizeMode: 'stretch',
            }}
          />
      </View>
      <View style={styles.containerTwo}>
        <TextInput style={styles.input} placeholder="Enter text" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    minHeight: windowHeight,
  },
  containerOne: {
    height: windowHeight * 0.5,
    justifyContent: 'center',
    alignItems: 'center', // 50% of the screen height
  },
  containerTwo: {
    minHeight: windowHeight * 0.5,
    backgroundColor: '#f0f',
  },
  imageContainer: {
    flex: 0.7,
  },
  input: {
    width: '90%',
    borderWidth: 1,
    padding: 10,
  },
});

export default Dashboard;


