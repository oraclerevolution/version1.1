import React from 'react'
import {View, StyleSheet, FlatList, ScrollView} from 'react-native'
import CardItem from './Partials/CardItem'
import {Header} from 'react-native-elements'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import actualites from '../Helpers/ActualitesData'

class ActualitesPage extends React.Component{
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
                <ScrollView>
                    <View>
                        <FlatList
                            data={actualites}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({item}) => <CardItem actualite={item} /*displayExamForSubject={this._displayExamList}*/ />}
                        />
                    </View>

                </ScrollView>

            </View>
        );
    }
}

export default ActualitesPage