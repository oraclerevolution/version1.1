import React, { Component } from 'react';
import { View, Text, Stylesheet,} from 'react-native';
import { Card, Button,} from 'react-native-elements'

export default class CardItem extends Component {


    getImageFromApi (name) {
        return name
    }

    render() {
        const actualite = this.props.actualite
        return (
            <View>
                <Card
                    title={actualite.title}
                    image={{uri: this.getImageFromApi(actualite.image)}}>
                    <Text style={{marginBottom: 10}}>
                        {actualite.preview}
                    </Text>
                    <Button
                        title="Voir l'article" />
                </Card>
            </View>
        );
    }
}