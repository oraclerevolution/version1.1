import React, { Component } from 'react';
import { View, Text, Stylesheet,} from 'react-native';
import { Card, Button,} from 'react-native-elements'

export default class CardItem extends Component {
    constructor(props){
        super(props)
    }

    getImageFromApi (name) {
        return 'http://137.74.116.91:3334/images/'+ name
    }

    render() {
        const {actualite, goDetail} = this.props;
        return (
                <Card
                    title={actualite.title}
                    image={require('../../assets/actu1.png')}>
                    <Text style={{marginBottom: 10}}>
                        {actualite.preview}
                    </Text>
                    <Button onPress={()=>goDetail(actualite.id)}
                        title="Voir l'article" />
                </Card>
        );
    }
}
