import React from 'react'
import {Header} from 'react-native-elements'
import {StyleSheet, View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Button as Btns } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SpeakerDetail extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <Header
                    containerStyle={{
                        backgroundColor: '#0a2849',
                    }}
                    leftComponent={
                        <Btns
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
                    centerComponent={{ text: 'Detail du speaker', style: { color: '#fff' } }}
                />
                <ScrollView style={styles.container}>
                    <View style={{height:280, width: '100%', flex:1, alignItems:'center', justifyContent: 'center', borderWidth:1, padding: 20}}>
                        <View style={{flex:1}}>
                            <Image
                                source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}
                                style={{height:180, width:180}}
                            />
                            <Text style={{fontSize:17, fontWeight: 'bold', marginTop:15, textAlign:'center'}}>Chris Jackson</Text>
                        </View>
                    </View>
                    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize:17, fontWeight: 'bold', marginTop:20, textAlign:'center', color: 'gray'}}>Biographie</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#efefef',
    }
})