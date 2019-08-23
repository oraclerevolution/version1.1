import React from 'react'
import {Header} from 'react-native-elements'
import {StyleSheet, View, Text, TouchableOpacity, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ThematiquesPage extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <Header
                    containerStyle={{
                        backgroundColor: '#0a2849',
                    }}
                    leftComponent={
                        <Button
                            icon={
                                <Icon
                                    name="ios-menu"
                                    size={25}
                                    color="white"
                                />
                            }
                            type="clear"
                            onPress={()=>this.props.navigation.openDrawer()}
                        />
                    }
                    centerComponent={{ text: 'Les thématiques', style: { color: '#fff' } }}
                />

                <ScrollView style={styles.AccordionView}>
                    <Text style={styles.accordionText}>Pour vous aider à mieux vivre et savoir pourquoi participer à cette edition de Africa Web Festival 2019, nous avons jugés bon d'énumérer les thématiques qui seront aborder lors des panels et conférences</Text>

                    <View style={styles.thematikStyle}>
                        <Text style={{textAlign: 'center', color: 'white'}}>Agriculture, Education & Santé</Text>
                    </View>

                    <View style={styles.thematikStyle}>
                        <Text style={{textAlign: 'center', color: 'white'}}>Big Data</Text>
                    </View>

                    <View style={styles.thematikStyle}>
                        <Text style={{textAlign: 'center', color: 'white'}}>Civic Tech: le civisme à l'heure du numérique</Text>
                    </View>

                    <View style={styles.thematikStyle}>
                        <Text style={{textAlign: 'center', color: 'white'}}>Innovation (Intelligence artificielle, Crypto-monnaie, Blockchain, etc.)</Text>
                    </View>
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    AccordionView: {
        padding: 15,
        flex:1,
    },
    accordionText:{
        textAlign: 'center',
        fontSize:16,
        fontFamily: 'BlissPro-Bold',
    },
    thematikStyle:{
        backgroundColor:'#0a2849',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 18,
        height:50,
        justifyContent:'center',
        alignItems: 'center',
        margin: 10
    }
})
