import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';

class CourseItem extends React.Component {

    render() {
        const cours = this.props.cours
        return (
            <TouchableOpacity
                style={styles.matiereItem}>
                <Text style={styles.title_text}>{cours.file_name}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    matiereItem: {
        backgroundColor: '#efefef',
        height: 65,
        borderRadius: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        padding: 5,
        flex: 1,
    },
    title_text: {
        textAlign: 'center',
        marginBottom: 8,
    },
})

export default CourseItem
