import React from 'react'
import {View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native'
import {Button as Buttons, Header} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native-paper';

export default class ConnexionPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            id_username: '',
            password: ''
        }
    }

    render(){
        return(
          <View style={styles.container}>
              <Header
                  leftComponent={
                      <Buttons
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
              <View style={styles.form}>
                  <Image
                    source={require('../assets/logo_awf.png')}
                    style={styles.strech}
                  />
                  <Text style={{fontSize:22,fontWeight:'bold'}}>Connectez-vous</Text>

                  <TextInput
                      label='identifiant perso'
                      value={this.state.id_username}
                      style={styles.champ}
                      onChangeText={id_username => this.setState({ id_username })}
                  />

                  <TextInput
                      label='mot de passe'
                      value={this.state.password}
                      style={styles.champ}
                      secureTextEntry={true}
                      onChangeText={password => this.setState({ password })}
                  />

                  <TouchableOpacity style={styles.btn_soumettre}>
                      <Button
                          title={"Connexion"}
                          onPress={()=>console.log('ok')}
                      />
                  </TouchableOpacity>
                  
              </View>
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
        flex:1
    },
    strech: {
        width: 110,
        height: 110,
    },
    champ: {
        margin: 10
    },
    btn_soumettre: {
        marginTop: 10
    }
})