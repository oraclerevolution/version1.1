import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {Header} from 'react-native-elements'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

export default class AfricanitePage extends React.Component{

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
                    centerComponent={{ text: 'Africanités', style: { color: '#fff' } }}
                />
                <View style={styles.AccordionView}>
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
        alignContent: 'center',
        justifyContent: 'center'
    },
    accordionText:{
        textAlign: 'center'
    }
})