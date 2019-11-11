import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default class PartenaireItem extends Component {
    render() {
        const {partenaire} = this.props
        return (
            <View style={[styles.slide]}>
                <Image
                    source={require("../../assets/"+partenaire.photo)}
                    style={{width:300, height:200, marginBottom:10}}
                />
                <Text style={styles.text}>
                    {partenaire.nom}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    slide: {
        padding: 15,
        height: 250,
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      },
      text: {
        color: '#000',
        fontSize: 16,
        textAlign:'center',
        fontWeight:"bold"
      },
})
