import React from 'react'
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native'
import {Button as Buttons, Header} from "react-native-elements";

class ActualiteDetail extends React.Component {

    constructor(props){
        super(props)
        this.state={
            article: undefined,
            isLoading: true
        }
    }

    _displayLoading(){
        if (this.state.isLoading){
            return(
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large"/>
                </View>
            )
        }
    }


    render() {
        console.log(this.props.navigation);
        return (
            <View style={styles.main_container}>
                <Header
                    centerComponent={{ text: "Details de l'article", style: { color: '#fff' } }}
                />
                <View style={styles.vueDetail}>
                    {this._displayLoading()}
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    vueDetail: {
        flex:1,
    },
    loadingContainer: {
        position:'absolute',
        left:0,
        right:0,
        top:0,
        bottom:0,
        alignItems:'center',
        justifyContent:'center'
    }
});

export default ActualiteDetail
