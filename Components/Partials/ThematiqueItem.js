import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default class CardItem extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const thematique = this.props.thematique
        return (
            <View style={styles.thematikStyle}>
                <Text style={{textAlign: 'center', color: 'white'}}>{thematique.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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