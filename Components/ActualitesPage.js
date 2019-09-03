import React from 'react'
import {View, StyleSheet, FlatList, ScrollView} from 'react-native'
import CardItem from './Partials/CardItem'
import {Header} from 'react-native-elements'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

class ActualitesPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            articles: []
        }
    }

    goDetail = (idArticle)=>{
        console.log("Display article id " + idArticle)
        this.props.navigation.navigate('actualiteDetail',{ idArticle: idArticle})
    };

    getArticlesFromApi(){
        let url = 'http://51.68.44.231:3334/articles'

        return fetch(url)
            .then((response) => response.json())
            .catch((error) => console.error(error))
    }

    componentDidMount() {
        this.getArticlesFromApi().then(data => {
            this.setState({articles: data.data})
        })
    }

    render(){
        return(
            <View style={{flex:1}}>
                <Header
                    containerStyle={{
                        backgroundColor: '#0a2849',
                    }}
                    leftComponent={
                        <Button
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
                    centerComponent={{ text: 'Les actualités', style: { color: '#fff' } }}
                />

                    <ScrollView style={styles.scrollview}>
                        <FlatList
                            data={this.state.articles}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({item}) => <CardItem actualite={item} goDetail={this.goDetail} />}
                        />
                    </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    scrollview: {
        padding:8
    },
})

export default ActualitesPage
