import React from 'react'
import {View,StyleSheet, Text} from 'react-native'
import {Header,Button as Buttons} from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import Timeline from 'react-native-timeline-listview'

export default class VendrediDeuxieme extends React.Component{

    constructor(){
        super()
        this.data = [
            {time: '08:00', title: 'Panel', description: "L'avantage du developpement mobile de nos jours\nDavid pio\nAssia N'goran\nHandon pierre"},
            {time: '10:00', title: 'Panel', description: "L'avantage du developpement mobile de nos jours\nDavid pio\nAssia N'goran\nHandon pierre"},
            {time: '11:00', title: 'Conference', description: "L'avantage du developpement mobile de nos jours\nDavid pio\nAssia N'goran\nHandon pierre"},
            {time: '12:00', title: 'Pause', description: "Dejeuner avec les panelistes"},
            {time: '13:00', title: 'Panel', description: "L'avantage du developpement mobile de nos jours\nDavid pio\nAssia N'goran\nHandon pierre"},
            {time: '14:00', title: 'Panel', description: "L'avantage du developpement mobile de nos jours\nDavid pio\nAssia N'goran\nHandon pierre"},
            {time: '15:00', title: 'Panel', description: "L'avantage du developpement mobile de nos jours\nDavid pio\nAssia N'goran\nHandon pierre"},
            {time: '16:00', title: 'Panel', description: "L'avantage du developpement mobile de nos jours\nDavid pio\nAssia N'goran\nHandon pierre"},
            {time: '17:00', title: 'Panel', description: "L'avantage du developpement mobile de nos jours\nDavid pio\nAssia N'goran\nHandon pierre"},

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
                    centerComponent={{ text: 'Vendredi 30 Novembre', style: { color: '#fff', fontSize:18 } }}
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
