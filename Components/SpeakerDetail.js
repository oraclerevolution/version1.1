import React from 'react'
import {Header} from 'react-native-elements'
import {StyleSheet, View, Text, Image, ScrollView, TouchableOpacity,ActivityIndicator} from 'react-native';

export default class SpeakerDetail extends React.Component{
    constructor(props){
        super(props)
        this.state={
            speakers: undefined,
            isLoading: true
        }
    }

    getSpeakerDetailFromApi(id){
        return fetch('http://51.68.44.231:3334/speaker/' + id)
            .then((response) => response.json())
            .catch((error) => console.error(error))
    }

    componentDidMount(){
        this.getSpeakerDetailFromApi(this.props.navigation.state.params.idSpeaker).then(data => {
            this.setState({
                speakers: data.res,
                isLoading: false
            })
        })
    }

    getImageFromApi (name) {
        return 'http://51.68.44.231/images/'+ name
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

    _displaySpeaker(){
        const {speakers} = this.state
        if(speakers != undefined){
            return(
                <View style={{flex:1}}>
                    <Header
                    containerStyle={{
                        backgroundColor: '#0a2849',
                    }}
                    leftComponent={
                        <TouchableOpacity>
                            <Text style={{color:'white'}} onPress={()=>this.props.navigation.goBack()}>Retour</Text>
                        </TouchableOpacity>
                    }
                    centerComponent={{ text: 'Details du speaker', style: { color: '#fff' } }}
                    />
                    <ScrollView style={styles.container}>
                        <View style={{borderWidth:1, margin:15, flex:1, justifyContent:'center', alignItems:'center', padding:10, backgroundColor:'white'}}>
                            <Image
                                source={{uri: this.getImageFromApi(speakers.photo)}}
                                style={{borderWidth:1, width:200, height:200}}
                            />
                            <Text style={{textAlign:'center', fontSize:19, fontWeight:'bold', marginBottom:6}}>{speakers.name}</Text>
                            <Text style={{textAlign:'center'}}>{speakers.fonction}</Text>
                        </View>
                        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.Title}>Biographie</Text>
                            <Text style={{padding:10}}>
                                {speakers.biographie}
                            </Text>
                        </View>
                    </ScrollView>
                </View>
                
            )
        }
    }

    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                    {this._displayLoading()}
                    {this._displaySpeaker()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#efefef',
    },
    vueImage:{
        height:280,
        width: '100%',
        flex:2,
        alignItems:'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#0a2849',
        borderWidth:3,
        borderColor:'#0a2849'
    },
    Title: {
        fontSize:17,
        fontWeight: 'bold',
        marginTop:20,
        marginBottom:15,
        textAlign:'center',
        color: 'gray'
    },
    loadingContainer: {
        position:'absolute',
        left:0,
        right:0,
        top:0,
        bottom:0,
        alignItems:'center',
        justifyContent:'center'
    },
    textName: {
        fontSize:17,
        fontWeight: 'bold',
        marginTop:15,
        textAlign:'center',
        color: '#fff'
    }
})
