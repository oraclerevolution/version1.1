import React from 'react'
import {View, Text, Button, TextInput, StyleSheet, KeyboardAvoidingView, Image, Alert, TouchableOpacity, ImageBackground} from 'react-native'
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
                email: this.state.numero,
                password: this.state.password,
            }),
        }).then((response) => response.json()).catch((error) => console.error(error))
        this.props.navigation.navigate('connex')
    }

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
                    centerComponent={{ text: 'Authentification', style: { color: '#fff' } }}
                />
                <KeyboardAvoidingView style={styles.form} behavior="padding" enabled>
                    <ImageBackground source={require('../assets/login.jpg')} style={{width: '100%', height: '100%', flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../assets/logo_awf.png')}
                            style={styles.strech}
                        />
                        <Text style={{fontSize:22,fontWeight:'bold', color:'white'}}>Inscrivez-vous</Text>

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
                                onPress={()=> {
                                    if (this.state.username != '' && this.state.numero != '' && this.state.password != '') {
                                        this._register()
                                    } else {
                                        Alert.alert('Remplissez tout les champs svp !')
                                    }
                                } }
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
        flex:1
    },
    strech: {
        width: 110,
        height: 110,
        marginBottom: 15
    },
    champ: {
        margin: 10,
        borderWidth:1,
        backgroundColor:'white',
        padding:6,
        borderRadius:3,
        width:250
    },
    btn_soumettre: {
        marginTop: 10,
        marginBottom: 25
    }
})
