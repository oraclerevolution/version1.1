import React from 'react'
import {Header} from 'react-native-elements'
import {StyleSheet, View, Button, Text, Alert, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import Textarea from 'react-native-textarea';
import { Button as Buttons } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

export default class InteretPage extends React.Component{

    state = {
        name: '',
        grade: '',
        sujet: '',
        message: '',
    };

    _TouchAlert(){
        Alert.alert(
            'Attention',
            'Etes-vous sûr de soumettre le formulaire',
            [
                {
                    text: 'Non',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Oui',
                    onPress: () => console.log('Ca marche !')
                },
            ],
            {cancelable: false},
        );
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
                    centerComponent={{ text: 'Votre intérêt', style: { color: '#fff' } }}
                />

                <View style={styles.AccordionView} >
                    <Text style={styles.title}>Exprimez votre intérêt pour AWF2019</Text>

                    <TextInput
                        label='Nom et prénoms'
                        value={this.state.name}
                        style={styles.champ}
                        onChangeText={name => this.setState({ name })}
                    />

                    <TextInput
                        label='Profession'
                        value={this.state.grade}
                        style={styles.champ}
                        onChangeText={grade => this.setState({ grade })}
                    />

                    <TextInput
                        label='Sujet'
                        value={this.state.sujet}
                        style={styles.champ}
                        onChangeText={sujet => this.setState({ sujet })}
                    />

                    <Textarea
                        containerStyle={styles.textareaContainer}
                        style={styles.textarea}
                        onChangeText={message => this.setState({ message })}
                        maxLength={200}
                        placeholder={"J'aimerais exposer à AWF2019 en temps que créateur d'une nouvelle startup"}
                    />

                    <TouchableOpacity style={styles.btn_soumettre}>
                        <Button
                            title={"Soumettre"}
                            onPress={this._TouchAlert.bind(this)}
                        />
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    AccordionView: {
        flex:1,
        padding: 15,
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 19,
        marginBottom:16,
    },
    champ: {
        marginBottom: 10
    },
    textareaContainer:{
        height:180,
        padding:5,
        backgroundColor: '#efefef'
    },
    textarea:{
        textAlignVertical: 'top',
        height: 170,
        fontSize: 15,
        color: "#000"
    },
    btn_soumettre: {
        marginTop: 10
    }
})
