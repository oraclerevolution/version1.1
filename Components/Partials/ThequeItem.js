import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';

class ThequeItem extends React.Component {

    render() {
        const {theq, displayDetailForTeque} = this.props
        return (
            <TouchableOpacity onPress={()=>displayDetailForTeque(theq.id)} style={styles.matiereItem}>
                    <Text style={styles.title_text}>{theq.name}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    matiereItem: {
        backgroundColor: '#bfbfbf',
        height: 110,
        borderRadius: 3,
        width:150,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        padding: 16,
        flex: 1,
        flexDirection: 'column',
    },
    title_text: {
        textAlign: 'center',
        marginBottom: 8,
    },
    description_text: {
        color:'white',
        textAlign: 'center',
        fontSize: 11
    }
})

export default ThequeItem
