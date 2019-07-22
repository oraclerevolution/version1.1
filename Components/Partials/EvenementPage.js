import React from 'react'
import {StyleSheet, View, Text} from 'react-native';
import { Button as Buttons } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header} from 'react-native-elements'

export default class EvenementPage extends React.Component{

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
                    centerComponent={{ text: 'Les évènements', style: { color: '#fff' } }}
                />

                <View style={styles.AccordionView}>
                    <Text style={styles.accordionText}>Reflexion aux évènements en cours ...</Text>
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