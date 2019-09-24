import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity, ScrollView} from 'react-native';
import { Button as Buttons } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header} from 'react-native-elements'
import Accordion from 'react-native-collapsible/Accordion';
import data from './AccordionData'

export default class EvenementPage extends React.Component{

    constructor(){
        super()
        this.state={
            activeSections: [],
        }
    }
    
      _renderHeader = section => {
        return (
          <View style={styles.header}>
            <Text style={styles.headerText}>{section.title}</Text>
          </View>
        );
      };

      _renderContent = section => {
        return (
          <View style={styles.content}>
            <Text style={{color:'white', fontWeight:'bold'}}>{section.description}</Text>
          </View>
        );
      };

      _updateSections = activeSections => {
        this.setState({ activeSections });
      };
    render(){
        return(
            <View style={styles.container}>
                <Header
                    containerStyle={{
                        backgroundColor: '#0a2849',
                    }}
                    leftComponent={
                        <Buttons
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
                    centerComponent={{ text: 'ACTIVITÉS SPÉCIFIQUES', style: { color: '#fff' } }}
                />

                <ScrollView style={styles.AccordionView}>
                    <Text style={styles.accordionText}>Pour cette édition d'Africa Web Festival, nous portons à votre connaissance les activités spécifiques qui auront lieu</Text>

                    <Accordion
                        containerStyle={{margin:10}}
                        sections={data}
                        activeSections={this.state.activeSections}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                        onChange={this._updateSections}
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
        margin:10
    },
    accordionText:{
        textAlign: 'center',
        fontSize:16,
    },
    thematikStyle:{
        backgroundColor:'#0a2849',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 18,
        height:45,
        justifyContent:'center',
        alignItems: 'center',
        margin: 10
    },
    header: {
        margin: 3,
        borderWidth:1,
        borderColor:'#0a2849',
        padding: 8
    },
    headerText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color:'#0a2849',
        fontSize: 18,
        borderRadius:2
    },
    content: {
        padding: 13,
        backgroundColor:'#0a2849',
    },
})
