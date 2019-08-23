import React from 'react'
import {Header} from 'react-native-elements'
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

export default class mapPage extends React.Component{

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

            <View>
                <TouchableOpacity style={styles.item2}>
                    <View style={{flex:1}}>
                        <Image
                            source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}
                            style={{height:60, width:60, borderRadius:'100%'}}
                        />
                    </View>
                    <View style={{flex:3,justifyContent:'center', alignItems: 'center'}}>
                        <Text style={{fontSize:17, fontWeight: 'bold'}}>Amy Farha</Text>
                        <Text style={{fontSize:15,textAlign:'center'}}>Vice President à Université Virtuelle de CI</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item2}>
                    <View style={{flex:1}}>
                        <Image
                            source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'}}
                            style={{height:60, width:60, borderRadius:'100%'}}
                        />
                    </View>
                    <View style={{flex:3,justifyContent:'center', alignItems: 'center'}}>
                        <Text style={{fontSize:17, fontWeight: 'bold'}}>Chris Jackson</Text>
                        <Text style={{fontSize:15,textAlign:'center'}}>CEO chez WeenovIT</Text>
                    </View>
                </TouchableOpacity>
            </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FAF8F8'
    },
    AccordionView: {
        padding: 15,
        flex:1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    accordionText:{
        textAlign: 'center'
    },
    item2: {
        padding: 10,
        borderWidth:1,
        borderColor:'#0a2849',
        backgroundColor: 'white',
        height: 100,
        margin:5,
        borderRadius: 5,
        flex:1,
        flexDirection:'row',
        justifyContent:'center'
    },
})
