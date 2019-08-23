import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity, ScrollView} from 'react-native';
import { Button as Buttons } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header} from 'react-native-elements'

export default class EvenementPage extends React.Component{

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
                    centerComponent={{ text: 'Les activités spécifiques', style: { color: '#fff' } }}
                />

                <ScrollView style={styles.AccordionView}>
                    <Text style={styles.accordionText}>Pour cette édition d'Africa Web Festival, nous portons à votre connaissance les activités spécifiques qui auront lieu</Text>
                        
                    <View style={styles.thematikStyle}>
                        <Text style={{textAlign: 'center', color: 'white'}}>Hackhathon</Text>
                    </View>

                    <View style={styles.thematikStyle}>
                        <Text style={{textAlign: 'center', color: 'white'}}>Campus AWF</Text>
                    </View>

                    <View style={styles.thematikStyle}>
                        <Text style={{textAlign: 'center', color: 'white'}}>programme jeune publique</Text>
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
        height:45,
        justifyContent:'center',
        alignItems: 'center',
        margin: 10
    }
})
