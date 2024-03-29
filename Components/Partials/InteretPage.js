import React from 'react';
import {Header} from 'react-native-elements';
import {StyleSheet, View, Button, Text, Alert,TextInput,Picker, TouchableOpacity} from 'react-native';
import Textarea from 'react-native-textarea';

export default class InteretPage extends React.Component{

    constructor(){
        super()
        this.state = {
            name: '',
            email: '',
            type: '',
            sujet: '',
            message: '',
        };
        this._postReseau = this._postReseau.bind(this)
        this._TouchAlert = this._TouchAlert.bind(this)
    }
    

    _postReseau(){ 

        fetch('http://51.68.44.231:3334/reseau', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                type: this.state.type,
                sujet: this.state.sujet,
                message: this.state.message
            }),
        })
        this.props.navigation.navigate('felicitation')
    }

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
                    onPress: () => {
                        if (this.state.name != '' && this.state.email != '' && this.state.type != '' && this.state.sujet != '' && this.state.message != '') {
                            this._postReseau()
                        } else {
                            Alert.alert('Remplissez tout les champs svp !')
                        }
                    }  
                },
            ],
            {cancelable: true},
        );
    }

    render(){
        const options = [{ value: 0, label: '0' }]
        return(
            <View style={styles.container}>
                <Header
                    containerStyle={{
                        backgroundColor: '#0a2849',
                    }}
                    leftComponent={
                        <TouchableOpacity>
                            <Text style={{color:'white'}} onPress={()=>this.props.navigation.goBack()}>Retour</Text>
                        </TouchableOpacity>
                    }
                    centerComponent={{ text: 'VOTRE INTÉRÊT', style: { color: '#fff' } }}
                />

                    <View style={styles.AccordionView} >
                        <Text style={styles.title}>Exprimez votre intérêt pour AWF2019</Text>

                        <TextInput
                            placeholder='Nom et prénoms'
                            value={this.state.name}
                            style={styles.champ}
                            onChangeText={name => this.setState({ name })}
                        />

                        <TextInput
                            placeholder='Votre email'
                            value={this.state.email}
                            style={styles.champ}
                            onChangeText={email => this.setState({ email })}
                        />

                        <View>
                            <Picker
                                selectedValue={this.state.type}
                                style={styles.selectInput}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({type: itemValue})
                                }>
                                <Picker.Item label="Choisissez un type de réseautage" value="" />
                                <Picker.Item label="Salle B2B" value="1" />
                                <Picker.Item label="LES JARDINS DES RENCONTRES B2B" value="2"/>
                                <Picker.Item label="CAFE-BIZ" value="3"/>
                            </Picker>
                        </View>

                        <TextInput
                            placeholder='Sujet'
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
    selectInput: {
        height: 40,
        borderBottomWidth:1,
        borderWidth:0,
        margin: 10,
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 19,
        marginBottom:16,
    },
    champ: {
        margin: 10,
        borderBottomWidth:1,
        padding:6,
        height:40
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
