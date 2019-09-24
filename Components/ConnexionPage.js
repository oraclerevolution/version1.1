import React from 'react'
import {View, Text, Button, StyleSheet, TextInput, KeyboardAvoidingView, Image, TouchableOpacity, ImageBackground, Alert, AsyncStorage} from 'react-native'
import {Button as Buttons, Header} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';

export default class ConnexionPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            numero: '',
            password: '',
            dataSource: []
        }

        this._signInAsync = this._signInAsync.bind(this)
    }

    _signInAsync(){
        return fetch('http://51.68.44.231:3334/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.numero,
                password: this.state.password,
            }),
        }).then((data) => {
            if (data.status == 200) {
                AsyncStorage.setItem('TokenUser', 'awf')
                this.props.navigation.navigate('Accueil')
            } else {
                Alert.alert('Les identifiants sont incorrects')
            }
          });

  };

    render(){
        return(
          <View style={styles.container}>
              <Header
                  containerStyle={{
                      backgroundColor: '#0a2849',
                  }}
                  leftComponent={
                      <Buttons
                          type="clear"
                          icon={
                              <Icon
                                  name="ios-menu"
                                  size={25}
                                  color="white"
                              />
                          }
                          onPress={()=>this.props.navigation.openDrawer()}
                      />
                  }
                  centerComponent={{ text: 'Connectez-vous', style: { color: '#fff' } }}
              />
              <KeyboardAvoidingView style={styles.form} behavior="padding" enabled>
                  <ImageBackground source={require('../assets/login.jpg')} style={{width: '100%', height: '100%', flex:1, alignItems: 'center', justifyContent: 'center'}}>
                      <Image
                          source={require('../assets/logo-rond.jpg')}
                          style={styles.strech}
                      />
                      <Text style={{fontSize:22,fontWeight:'bold', color:'white'}}>Connectez-vous</Text>
                      <TextInput
                          placeholder='numéro de telephone'
                          value={this.state.numero}
                          style={styles.champ}
                          onChangeText={numero => this.setState({ numero })}
                      />

                      <TextInput
                          placeholder='mot de passe'
                          value={this.state.password}
                          style={styles.champ}
                          secureTextEntry={true}
                          onChangeText={password => this.setState({ password })}
                      />

                      <TouchableOpacity style={styles.btn_soumettre}>
                          <Button
                              title={"Connexion"}
                              onPress={()=>{
                                if (this.state.numero != '' && this.state.password != '') {
                                    this._signInAsync()
                                } else {
                                    Alert.alert('Remplissez tout les champs svp !')
                                }
                            }}
                          />
                      </TouchableOpacity>
                  </ImageBackground>
              </KeyboardAvoidingView>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    form:{
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
    },
    strech: {
        width: 110,
        height: 110,
        marginBottom:15
    },
    champ: {
        margin: 10,
        borderWidth:1,
        padding:6,
        backgroundColor:'white',
        borderRadius:3,
        width:250
    },
    btn_soumettre: {
        marginTop: 10,
        marginBottom: 25
    }
})
