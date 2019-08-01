import React from 'react'
import {StyleSheet, View, Text, ActivityIndicator, FlatList, ScrollView} from 'react-native'
import CourseItem from "../Components/Partials/CourseItem";
import {Header} from 'react-native-elements'

export default class TipsDetail extends React.Component{

    constructor(){
        super()
        this.state={
            tip: undefined,
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

    getTipsDetailFromApi(id){
        return fetch('http://137.74.116.91:3334/tips/'+id)
            .then((response) => response.json())
            .catch((error) => console.error(error))
    }

    componentDidMount() {
        this.getTipsDetailFromApi(this.props.navigation.state.params.idTip).then(data => {
            this.setState({
                tip: data.data.items,
                isLoading: false
            })
        })
    }

    _displayTips(){
        if (this.state.tip != undefined){
            return(
                <ScrollView>
                    <FlatList
                        data={this.state.tip}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <CourseItem cours={item} />}
                    />
                </ScrollView>
            )
        }
    }

    render(){
        return(
            <View style={styles.main_container}>
                <Header
                    centerComponent={{ text: 'Liste des documents', style: { color: '#fff' } }}
                />
                <View style={{flex:1,}}>
                    {this._displayLoading()}
                    {this._displayTips()}
                </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    main_container: {
        flex: 1
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
