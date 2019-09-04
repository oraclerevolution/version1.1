import React from 'react'
import {Header} from 'react-native-elements'
import {StyleSheet, View, Text, ScrollView, FlatList} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import ThematiqueItem from './ThematiqueItem'

export default class ThematiquesPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            thematiques: []
        }
    }

    getThematiqueFromApi(){
        let url = 'http://51.68.44.231:3334/thems'

        return fetch(url)
            .then((response) => response.json())
            .catch((error) => console.error(error))
    }

    componentDidMount() {
        this.getThematiqueFromApi().then(data => {
            this.setState({thematiques: data.data})
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <Header
                    containerStyle={{
                        backgroundColor: '#0a2849',
                    }}
                    leftComponent={
                        <Button
                            icon={
                                <Icon
                                    name="ios-menu"
                                    size={25}
                                    color="white"
                                />
                            }
                            type="clear"
                            onPress={()=>this.props.navigation.openDrawer()}
                        />
                    }
                    centerComponent={{ text: 'Les thématiques', style: { color: '#fff' } }}
                />

                <ScrollView style={styles.AccordionView}>
                <Text style={styles.accordionText}>Pour vous aider à mieux vivre et savoir pourquoi participer à cette edition de Africa Web Festival 2019, nous avons jugés bon d'énumérer les thématiques qui seront aborder lors des panels et conférences</Text>
                    <FlatList
                        data={this.state.thematiques}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <ThematiqueItem thematique={item}/>
                    }
                    />
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    AccordionView: {
        padding: 15,
        flex:1,
    },
    accordionText:{
        textAlign: 'center',
        fontSize:16,
    },
})
