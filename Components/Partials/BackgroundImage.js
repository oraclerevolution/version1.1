import React from 'react'
import {Image, StyleSheet} from 'react-native'

class BackgroundImage extends React.Component {

    render() {
        return (
            <Image source={require('../assets/assia.jpg')} style={styles.backgroundImage}>
                    {this.props.children}
            </Image>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: 50,
        height: 10,
        resizeMode: 'cover',
        borderWidth:2,
        borderColor: "#fff",
        borderRadius: 50,
    }
});

export default BackgroundImage