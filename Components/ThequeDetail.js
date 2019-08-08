import React from 'react'
import {View, StyleSheet, Text, ActivityIndicator} from 'react-native'
import {Header} from 'react-native-elements'

export default class ThequeDetail extends React.Component{

    constructor(){
        super()
        this.state={
            theque: undefined,
            isLoading: true
        }
    }

    _displayLoading(){
        if (this.state.isLoading){
            return(
                <View style={styles.loaging_container}>
                    <ActivityIndicator size="large" />
                </View>
            )
        }
    }

    getThequeDetailFromApi(id){
        return fetch('http://137.74.116.91:3334/theques/'+id)
            .then((response) => response.json())
            .catch((error) => console.error(error))
    }

    componentDidMount() {
        this.getThequeDetailFromApi(this.props.navigation.state.params.idTheq).then(data => {
            this.setState({
                theque: data.data.items,
                isLoading: false
            })
        })
    }

    render(){
        return(
            <view style={styles.main_container}>
                <Header
                    centerComponent={{ text: 'La bibliothèque', style: { color: '#fff' } }}
                />
                <View style={{flex:1,}}>
                    {this._displayLoading()}
                </View>
            </view>
        )
    }
}

const styles = StyleSheet.create({
    main_container:{
        flex:1
    }
})
