import React from 'react'
import {View,Text,StyleSheet, FlatList, ScrollView} from 'react-native'
import ThequeItem from './Partials/ThequeItem'
import theqdata from '../Helpers/ThequeFolderData'
import { Button as Buttons } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header} from 'react-native-elements'

export default class AwfTheqPage extends React.Component{
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
                    centerComponent={{ text: 'AWF Thèque', style: { color: '#fff' } }}
                />
                <ScrollView>
                    <FlatList
                        data={theqdata}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <ThequeItem theq={item} /*displayChapterSubject={this._displayChapterOfSubject}*/ />}
                        numColumns={2}
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    }
})