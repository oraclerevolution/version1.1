import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Header, Button as Btns} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'

export default class FormationsPage extends React.Component{
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
                    centerComponent={{ text: 'Les Formations', style: { color: '#fff' } }}
                />
                <View style={styles.container}>
                    <Text>Je suis la page de formation</Text>
                </View>
                <View style={{backgroundColor:'#0a2849', height:80,}}>
                    <Text style={{textAlign:'center', color:'white',fontSize:12, padding:10}}>© Africa Web Festival - TOUS DROITS RESERVES</Text>
                    <Text style={{textAlign:'center', color:'white',fontSize:12}}>App powered by WEENOVIT ®</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})