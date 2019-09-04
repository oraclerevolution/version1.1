import React from 'react'
import {Header} from 'react-native-elements'
import {View,ScrollView, StyleSheet, FlatList} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import SpeakerItem from './SpeakerItem';

export default class mapPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            speakers: []
        }
    }

    getSpeakersFromApi(){
        let url = 'http://51.68.44.231:3334/speakers'

        return fetch(url)
            .then((response) => response.json())
            .catch((error) => console.error(error))
    }

    componentDidMount() {
        this.getSpeakersFromApi().then(data => {
            this.setState({speakers: data})
        })
    }

    render(){
        return(
            <View style={styles.container}>
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
                    centerComponent={{ text: 'Les speakers', style: { color: '#fff' } }}
                />

                <ScrollView style={{flex:1}}>
                    <FlatList
                        data={this.state.speakers}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <SpeakerItem speaker={item}/>}
                    />
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff'
    },
    AccordionView: {
        padding: 15,
        flex:1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    accordionText:{
        textAlign: 'center'
    }
})
