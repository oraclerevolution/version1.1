import React from 'react'
import {View,StyleSheet,WebView, Text, TouchableOpacity} from 'react-native'
import {Header,Button as Buttons} from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import {WebView as Web} from 'react-native-webview';

export default class TicketPage extends React.Component{
    render(){
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
                    centerComponent={{ text: 'Recuperer vos tickets', style: { color: '#fff', fontSize:18,} }}
                />
                <Web
                    source={{ uri: 'https://google.com' }}
                    style={{flex:1, width: '100%'}}
                />
            </View>
            
        )
    }
}
