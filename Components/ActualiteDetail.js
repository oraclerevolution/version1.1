import React from 'react'
import {StyleSheet, View, Text, Image, Button, ActivityIndicator, ScrollView, TouchableOpacity} from 'react-native'
import {Button as Buttons, Header} from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment'

class ActualiteDetail extends React.Component {

    constructor(props){
        super(props)
        this.state={
            article: undefined,
            isLoading: true
        }
    }

    getArticleDetailFromApi(id){
        return fetch('http://51.68.44.231:3334/article/' + id)
            .then((response) => response.json())
            .catch((error) => console.error(error))
    }

    componentDidMount(){
        this.getArticleDetailFromApi(this.props.navigation.state.params.idArticle).then(data => {
            this.setState({
                article: data.data,
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

    _displayArticle(){
        const {article} = this.state
        if(article != undefined){
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
                        centerComponent={
                            <Text style={{color: '#fff'}} numberOfLines={2} >
                                {article.title}
                            </Text>
                        }
                    />
                    <ScrollView style={styles.scrollview_container}>
                        <Image
                            style={styles.image}
                            source={{uri: this.getImageFromApi(article.photo)}}
                        />
                        <View style={{padding:7}}>
                            <Text style={styles.article}>{article.article}</Text>
                        </View>
                    </ScrollView>
                </View>
                
            )
        }
    }


    render() {
        return (
            <View style={styles.main_container}>
                <View style={styles.vueDetail}>
                    {this._displayLoading()}
                    {this._displayArticle()}
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
    text_title: {
        fontWeight: 'bold',
        textAlign :'center',
        fontSize: 25,
        marginTop: 15
    },
    image: {
        width: '95%',
        height: 250,
        marginBottom: 15,
        marginTop: 8,
        borderColor: 'black',
        alignSelf:'center'
    },
    article: {
        fontSize: 18,
        textAlign:'justify'
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
    scrollview_container:{
        flex:1
    }
});

export default ActualiteDetail
