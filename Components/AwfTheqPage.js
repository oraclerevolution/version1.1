import React from 'react'
import {View, Text, StyleSheet, FlatList, ScrollView, ActivityIndicator} from 'react-native'
import ThequeItem from './Partials/ThequeItem'
import { Button as Buttons } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header} from 'react-native-elements'

export default class AwfTheqPage extends React.Component{

    constructor(){
        super()
        this.state = { theques: [], isLoading: true}
    }

    _displayLoading(){
        if(this.state.isLoading){
            return(
                <View style={styles.loaging_container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }

    getTheqFromApi(){
        let url = 'http://51.68.44.231:3334/allTheques';

        return fetch(url)
            .then((response) => response.json())
            .catch((error) => console.error(error))
    }

    _displayDetailForTeque = (idTheq) => {
        console.log("Display tip with id " + idTheq)
        this.props.navigation.navigate("thequeDetail", { idTheq: idTheq})
    }

    componentDidMount() {
        this.getTheqFromApi().then(data => {
            this.setState({ theques: data.data.theques, isLoading: false})
        })
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
                    centerComponent={{ text: 'AWF Thèque', style: { color: '#fff' } }}
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
