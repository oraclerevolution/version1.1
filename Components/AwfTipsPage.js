import React from 'react'
import {View,Text,StyleSheet, FlatList, ScrollView, ActivityIndicator} from 'react-native'
import TipsItem from './Partials/TipsItem'
import { Button as Buttons } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header} from 'react-native-elements'

export default class AwfTipsPage extends React.Component{

    constructor(){
        super()
        this.state = {isLoading: true}
    }

    componentDidMount(){
        return fetch('http://137.74.116.91/allTips')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.tips,
                })
            })
            .catch((error) => {
                console.error(error)
            })
    }
    render() {

        if (this.state.isLoading) {
            return(
                <View style={{flex:1, padding:20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return(
            <View style={styles.container}>
                <Header
                    leftComponent={
                        <Buttons
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
                    centerComponent={{ text: 'AWF Tips', style: { color: '#fff' } }}
                />
                <ScrollView>
                    <FlatList
                        data={this.state.dataSource}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <TipsItem tips={item} />}
                        numColumns={2}
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    }
})