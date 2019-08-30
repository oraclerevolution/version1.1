import React from 'react'
import {Header} from 'react-native-elements'
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
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
                    centerComponent={{ text: 'Details du speaker', style: { color: '#fff' } }}
                />
                <ScrollView style={styles.container}>
                    <View style={styles.vueImage}>
                        <View style={{flex:1}}>
                            <Image
                                source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}
                                style={{height:180, width:180}}
                            />
                            <Text style={styles.textName}>Chris Jackson</Text>
                            <Text style={styles.textName}>Directeur exécutif weenovit</Text>
                            <Text style={styles.textName}>Côte d'Ivoire</Text>
                        </View>
                    </View>
                    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={styles.Title}>Biographie</Text>
                        <Text style={{padding:10}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
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
    },
    vueImage:{
        height:280,
        width: '100%',
        flex:2,
        alignItems:'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#0a2849',
        borderWidth:3,
        borderColor:'#0a2849'
    },
    Title: {
        fontSize:17,
        fontWeight: 'bold',
        marginTop:20,
        marginBottom:15,
        textAlign:'center',
        color: 'gray'
    },
    textName: {
        fontSize:17,
        fontWeight: 'bold',
        marginTop:15,
        textAlign:'center',
        color: '#fff'
    }
})
