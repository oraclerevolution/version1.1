import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import BackgroundImage from '../Components/Partials/BackgroundImage'

export default class ProfilPage extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <BackgroundImage />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})