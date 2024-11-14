import { View, Text, StyleSheet, ScrollView, TextInput, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { smitPrimary, smitSecondary } from '@/constants/Colors';
import Icon from '@expo/vector-icons/FontAwesome'
import { StatusBar } from 'expo-status-bar';

const Dashboard = () => {
  const windowHeight = Dimensions.get('window').height;
  return (
    <ScrollView>
      <StatusBar style={'light'}/>
      {/* <View style ={{height:windowHeight}}> */}
        <View style={{minHeight: windowHeight * 0.46,alignItems:'center'}}>
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
                top: '2%',
                width: '100%',
                height: '100%',
                resizeMode: 'stretch',
              }}
            />
        </View>
        <View style={[styles.containerTwo,{minHeight: windowHeight * 0.5}]}>
          <View style = {[styles.inputContainer,{gap:windowHeight * 0.05}]}>
            <View style = {{width:'100%',gap:10}}>
              <TextInput placeholder='Email' inputMode='email' cursorColor={'#EFEEEE'} style={[styles.input,{height:windowHeight * 0.08,fontSize:windowHeight * 0.023}]}/>   
              <TextInput placeholder='Password' secureTextEntry = {true} inputMode='text' cursorColor={'#EFEEEE'} style={[styles.input,{height:windowHeight * 0.08,fontSize:windowHeight * 0.023}]}/>
              <View style ={{alignItems:'flex-end'}}>
                <Text style ={{fontFamily:'Poppins-Regular'}}>Forget Password ?</Text>
              </View>
            </View>
             <TouchableOpacity style={{width:'100%'}} activeOpacity={0.8}>
              <LinearGradient colors={[smitSecondary,smitPrimary]} 
              style = {[styles.loginbutton,{height:windowHeight * 0.08}]}>
                  <Text style = {[styles.loginText,{fontSize:windowHeight*0.023}]}>Login</Text>
                  <Icon name='chevron-right' size={windowHeight* 0.02} color={'#fff'}/>
              </LinearGradient>
            </TouchableOpacity>   
          </View>
        </View>
      {/* </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 0.7,
    // minHeight:Dimensions.get('window').height/2.8,
    width:'100%'
  },
  containerTwo: {
    justifyContent:'center',
    alignItems:'center'
  },
  inputContainer:{
    flex:1,
    width:'90%',
    paddingVertical:'2%',
    alignItems:'center',
    
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor:'#000',
    borderRadius:5,
    paddingLeft:'3%',
    color:'#535353',
    fontFamily:'Poppins-Regular',

    // lineHeight:20
    
  },

  loginbutton:{
    flexDirection:'row',
    alignItems:'center',justifyContent:'space-between', paddingHorizontal:'3%',borderRadius:5
  },
  loginText:{
    fontFamily:'Poppins-SemiBold',color:'#fff'
  }
});

export default Dashboard;


