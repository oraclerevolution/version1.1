import React, { Component } from 'react';
import { View, Text, Stylesheet,} from 'react-native';
import { Card, Button,} from 'react-native-elements'

export default class CardItem extends Component {
    constructor(props){
        super(props)
    }

    getImageFromApi (name) {
        return name
    }

    render() {
        const {actualite, goDetail} = this.props;
        return (
            <View>
                <Card
                    title={actualite.title}
                    image={{uri: this.getImageFromApi(actualite.image)}}>
                    <Text style={{marginBottom: 10}}>
                        {actualite.preview}
                    </Text>
                    <Button onPress={()=>goDetail()}
                        title="Voir l'article" />
                </Card>
            </View>
        );
    }
}
