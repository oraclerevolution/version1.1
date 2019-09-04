import React from 'react'
import {TouchableOpacity,View,StyleSheet,Image,Text} from 'react-native'

export default class SpeakerItem extends React.Component{
    render(){
        const {speaker,goDetail} = this.props
        const photo = speaker.photo
        return(
            <TouchableOpacity style={styles.item2} onPress={()=>goDetail(speaker.id)}>
                    <View style={{flex:1}}>
                        <Image
                            source={{uri: 'http://51.68.44.231/images/'+photo}}
                            style={{height:60, width:60}}
                        />
                    </View>
                    <View style={{flex:3,justifyContent:'center', alignItems: 'center'}}>
                        <Text style={{fontSize:17, fontWeight: 'bold'}}>{speaker.name}</Text>
                        <Text style={{fontSize:15,textAlign:'center'}}>{speaker.fonction}</Text>
                    </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    item2: {
        padding: 10,
        borderWidth:1,
        borderColor:'#0a2849',
        backgroundColor: '#efefef',
        height: 90,
        margin:5,
        borderRadius: 5,
        flex:1,
        flexDirection:'row',
        justifyContent:'center'
    },
})