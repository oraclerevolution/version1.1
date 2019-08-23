import React from 'react'
import {View, Text, StyleSheet, FlatList, ScrollView, ActivityIndicator} from 'react-native'
import ThequeItem from './Partials/ThequeItem'
import { Button as Buttons } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header} from 'react-native-elements'

export default class AwfTheqPage extends React.Component{

    constructor(){
        super()
    }

    render() {
        return(
            <View style={styles.container}>
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
                    centerComponent={{ text: 'La rétrospective', style: { color: '#fff' } }}
                />
                <View style={styles.viewTheque}>
                    <Text>Bibliothèque AWF pas encore disponible ...</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    viewTheque: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
