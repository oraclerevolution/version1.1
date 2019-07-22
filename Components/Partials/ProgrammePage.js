import React from 'react'
import {Header} from 'react-native-elements'
import {StyleSheet, View, Text} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { DataTable } from 'react-native-paper';

export default class ProgrammePage extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <Header
                    leftComponent={
                        <Button
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
                    centerComponent={{ text: 'Le programme', style: { color: '#fff' } }}
                />

                <View style={styles.AccordionView}>
                    <Text style={styles.accordionText}>Etablissement du programme en cours ...</Text>
                    <Text style={styles.accordionText}>Revenez plus tard ...</Text>
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
        padding: 15,
        flex:1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    accordionText:{
        textAlign: 'center'
    }
})