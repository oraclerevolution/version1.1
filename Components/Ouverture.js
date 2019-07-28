import React from 'react'
import {View,StyleSheet,Image,Button,Text, ImageBackground} from 'react-native'
import bgImage from '../assets/ouverture.jpg'

export default class Ouverture extends React.Component{

    onpenDrawer(){
        this.props.navigation.openDrawer();
    }
    render(){
        return(
            <ImageBackground source={bgImage} style={styles.container}>
                <View style={styles.buttonVue}>
                    <Button title={"Continuer"} onPress={this.onpenDrawer.bind(this)} style={styles.btn} />
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonVue: {
        flex:1,
        justifyContent: 'flex-end',
        paddingBottom: 80
    },

})
