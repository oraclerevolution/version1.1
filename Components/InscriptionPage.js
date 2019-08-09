import React from 'react'
import {View, Text, Button, TextInput, StyleSheet, KeyboardAvoidingView, Image, TouchableOpacity} from 'react-native'
import {Button as Buttons, Header} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';

export default class InscriptionPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            username: '',
            numero: '',
            password: '',
        }

        //fonction binding
        this._register = this._register.bind(this)
    }

    _register(){

        fetch('http://51.68.44.231:3334/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                numero: this.state.numero,
                password: this.state.password,
            }),
        }).then((response) => response.json()).catch((error) => console.error(error))
        this.props.navigation.navigate('connex')
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
                    centerComponent={{ text: 'Inscrivez-vous', style: { color: '#fff' } }}
                />
                <KeyboardAvoidingView style={styles.form} behavior="padding" enabled>
                    <Image
                        source={require('../assets/logo_awf.png')}
                        style={styles.strech}
                    />
                    <Text style={{fontSize:22,fontWeight:'bold'}}>Inscrivez-vous</Text>

                    <TextInput
                        placeholder="nom d'utilisateur"
                        value={this.state.username}
                        style={styles.champ}
                        onChangeText={username => this.setState({ username })}
                    />

                    <TextInput
                        placeholder="numero de telephone"
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
                            title={"Inscription"}
                            onPress={()=>this._register()}
                        />
                    </TouchableOpacity>

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
        flex:1
    },
    strech: {
        width: 110,
        height: 110,
    },
    champ: {
        margin: 10,
        borderBottomWidth:1,
        padding:6,
        width:250
    },
    btn_soumettre: {
        marginTop: 10
    }
})