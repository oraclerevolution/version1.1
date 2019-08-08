import React from 'react';
import { StyleSheet, Text,TouchableOpacity } from 'react-native';

class VideoItem extends React.Component {

    render() {
        const video = this.props.video;
        return (
            <TouchableOpacity
                style={styles.matiereItem}>
                <Text style={styles.title_text}>{video.video_name}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    matiereItem: {
        backgroundColor: '#efefef',
        height: 150,
        width:150,
        borderRadius: 0,
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
});

export default VideoItem
