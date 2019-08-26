import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { Button as Buttons, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Retrofile1 extends React.Component{
    render(){
        return(
            <View>
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
                    centerComponent={{ text: 'AWF Retrospective', style: { color: '#fff' } }}
                />
                <View style={styles.container}>
                    <Text style={styles.title}>DECLOISONNER LES PAYS ET ENTAMER LA CREATION D'UN ÉCOSYSTEME D'INNOVATION NUMÉRIQUE CONTINENTAL</Text>
                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:16
    },
    title: {
        textAlign:'center',
        fontFamily: 'BlissPro-Bold',
        fontSize: 18
    }
})