import React from 'react'
import {View,StyleSheet,Image,Button,Text} from 'react-native'


export default class Ouverture extends React.Component{

    onpenDrawer(){
        this.props.navigation.openDrawer();
    }
    render(){
        return(
            <View style={styles.container}>
                <Image
                    style={styles.strech}
                    source={require('../assets/logo_awf.png')}
                />
                <Text style={styles.text}>LE PLUS GRAND RASSEMBLEMENT DU NUMERIQUE, DE L'ENTREPRENEURIAT ET DE L'INNOVATION EN AFRIQUE</Text>
                <Button title={"Continuer"} onPress={this.onpenDrawer.bind(this)} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    strech: {
        marginBottom: 10,
        width: 150,
        height: 150
    }
})