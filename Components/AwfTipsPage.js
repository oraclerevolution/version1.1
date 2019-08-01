import React from 'react'
import {View,Text,StyleSheet, FlatList, ScrollView, ActivityIndicator} from 'react-native'
import TipsItem from './Partials/TipsItem'
import { Button as Buttons } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header} from 'react-native-elements'

export default class AwfTipsPage extends React.Component{

    constructor(){
        super()
        this.state = { tips: [], isLoading: true}
    }

    componentDidMount() {
        this.getTipsFromApi().then(data => {
            this.setState({ tips: data.data.tips, isLoading: false})
        })
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
    getTipsFromApi(){
        let url = 'http://137.74.116.91:3334/allTips';

        return fetch(url)
            .then((response) => response.json())
            .catch((error) => console.error(error))
    }

    _displayDetailForTips = (idTip) => {
        console.log("Display tip with id " + idTip)
        this.props.navigation.navigate("tipsDetail", { idTip: idTip})
    }

    render() {

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
                        data={this.state.tips}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <TipsItem tips={item} displayDetailForTip={this._displayDetailForTips} />}
                        numColumns={2}
                    />
                    {this._displayLoading()}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    loaging_container: {
        position: 'absolute',
        left: 0,
        right:0,
        top:100,
        bottom:0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
