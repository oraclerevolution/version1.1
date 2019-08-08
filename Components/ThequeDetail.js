import React from 'react'
import {View, StyleSheet, Text, ActivityIndicator, ScrollView, FlatList} from 'react-native'
import {Header} from 'react-native-elements'
import VideoItem from './Partials/VideoItem'

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
        return fetch('http://51.68.44.231:3334/theques/'+id)
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

    _displayTheque(){
        if (this.state.theque != undefined){
            return(
                <ScrollView>
                    <FlatList
                        data={this.state.theque}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <VideoItem video={item} />}
                        numColumns={2}
                    />
                </ScrollView>
            )
        }
    }

    render(){
        return(
            <View style={styles.main_container}>
                <Header
                    centerComponent={{ text: 'La bibliothèque', style: { color: '#fff' } }}
                />
                <View style={{flex:1,}}>
                    {this._displayLoading()}
                    {this._displayTheque()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container:{
        flex:1
    }
})
