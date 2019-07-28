import React from 'react'
import {View, StyleSheet, FlatList, ScrollView, ActivityIndicator} from 'react-native'
import CardItem from './Partials/CardItem'
import {Header} from 'react-native-elements'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import actualites from '../Helpers/ActualitesData'

class ActualitesPage extends React.Component{
    constructor(props){
        super(props);
    }
    goDetail = (idArticle)=>{
        this.props.navigation.navigate('actualiteDetail',{idArticle: idArticle})
    };

    render(){
        return(
            <View>
                <Header
                    leftComponent={
                        <Button
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
                    rightComponent={
                        <Button
                            icon={
                                <Icon
                                    name="ios-search"
                                    size={25}
                                    color="white"
                                />
                            }
                            onPress={()=>console.log('ok')}
                        />
                    }
                />
                <ScrollView style={styles.scrollview}>
                    <View>
                        <FlatList
                            data={actualites}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({item}) => <CardItem actualite={item} goDetail={this.goDetail} />}
                        />
                    </View>

                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    scrollview: {
        padding: 20,
    },
})

export default ActualitesPage
