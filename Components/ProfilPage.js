import React from 'react'
import {View, Button, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {TextInput} from 'react-native-paper'
import {Avatar} from 'react-native-paper'
import {Button as Buttons, Header} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';

export default class ProfilPage extends React.Component{

    constructor(){
        super()
        this.state={
            phone_number: '',
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
                  centerComponent={{ text: 'Le profil', style: { color: '#fff' } }}
                />

                <View style={styles.ppstyle}>
                    <Avatar.Text size={200} label="A" />
                </View>
                <View style={styles.coordonees}>
                    <TextInput
                        label='Nouveau contact'
                        value={this.state.phone_number}
                        style={styles.champ}
                        onChangeText={phone_number => this.setState({ phone_number })}
                    />

                    <TextInput
                        label='Nouveau password'
                        value={this.state.password}
                        style={styles.champ}
                        onChangeText={password => this.setState({ password })}
                    />

                    <TouchableOpacity style={styles.btn_soumettre}>
                        <Button
                            title={"Actualiser vos infos"}
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
        flex:1
    },
    ppstyle:{
        justifyContent: 'center',
        alignItems: 'center',
        flex:2,
        marginTop:15,
        marginBottom:15
    },
    coordonees:{
        flex:3
    },
    btn_soumettre: {
        margin: 5,
        width:180,
        alignSelf: 'center'
    },
    champ: {
        margin: 10
    },
})