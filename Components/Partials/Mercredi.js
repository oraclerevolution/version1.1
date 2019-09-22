import React from 'react'
import {View,StyleSheet, Text} from 'react-native'
import {Header,Button as Buttons} from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import Timeline from 'react-native-timeline-listview'

export default class Mercredi extends React.Component{

    constructor(){
        super()
        this.data = [
            {time: '18:00', title: 'Cocktail AKWABA avec ORANGE CÔTE D\'IVOIRE', description: "6 à 8: Le reseautage des affaires !\nMaison du digital ORANGE CÔTE D'IVORE"},
            {time: '20:00'},

        ]
    }

    render() {
        return(
            <View style={{flex:1}}>
                <Header
                    containerStyle={{
                        backgroundColor: '#0a2849',
                    }}
                    leftComponent={
                        <Buttons
                            type="clear"
                            icon={
                                <Icon
                                    name="ios-menu"
                                    size={25}
                                    color="white"
                                />
                            }
                            onPress={()=> this.props.navigation.openDrawer()}
                        />
                    }
                    centerComponent={{ text: 'Mercredi 20 Novembre', style: { color: '#fff', fontSize:18 } }}
                />
                <View style={styles.container}>
                    <Timeline
                        data={this.data}
                        circleSize={20}
                        circleColor='rgb(45,156,219)'
                        lineColor='#6eccde'
                        timeContainerStyle={{minWidth:52, marginTop: -5}}
                        timeStyle={{textAlign: 'center', backgroundColor:'#0a2849', color:'white', padding:5, borderRadius:13}}
                        descriptionStyle={{color:'gray'}}
                        options={{
                            style:{paddingTop:5,padding: 20}
                        }}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:15
    }
})
