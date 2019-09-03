import React, { Component } from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';
import { Card, Button,} from 'react-native-elements'

export default class CardItem extends Component {
    constructor(props){
        super(props)
    }

    getImageFromApi (name) {
        return 'http://51.68.44.231/images/'+ name
    }

    render() {
        const {actualite, goDetail} = this.props;
        return (
                <View style={styles.container}>
                    <Text style={{textAlign:'center', fontWeight:'bold'}}>{actualite.title}</Text>
                    <Image source={{uri: this.getImageFromApi(actualite.photo)}} style={{height:200, width: 300, borderWidth:1}} />
                    <Text style={{marginBottom: 10}} numberOfLines={4}>
                    {actualite.article}
                    </Text>
                    <Button onPress={()=>goDetail(actualite.id)}
                    title="Voir l'article" />
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        padding:5,
        borderWidth:1,
        borderColor:'#efefef'
    }
})
