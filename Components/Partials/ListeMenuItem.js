import React, { Component } from 'react';
import {Text, StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ListeMenuItem extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const {item, goToReseautage} = this.props;
        return (
                <TouchableOpacity style={styles.item} onPress={()=>goToReseautage(item.page, item.id)}>
                    <Text style={{fontWeight: 'bold', fontSize:18}}><Icon name={item.iconName} size={23} color="#0a2849"/> {item.name}</Text>
                </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        borderWidth:1,
        borderColor:'#0a2849',
        height: 50,
        margin:5,
        borderRadius: 5,
        flex:1,
        justifyContent:'center'
    },
})