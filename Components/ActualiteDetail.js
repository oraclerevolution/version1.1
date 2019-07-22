import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class ActualiteDetail extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <Text>Détail de l'article</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    }
})

export default ActualiteDetail