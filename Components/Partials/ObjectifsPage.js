import React from 'react'
import {Header} from 'react-native-elements'
import {StyleSheet, View, Text} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { Button as Buttons } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const SECTIONS = [
    {
        title: 'Objectif 1',
        content: ' Promouvoir la production, la diffusion et l’utilisation des outils issus du numérique par les acteurs des sociétés \n' +
            'africaines.',
    },
    {
        title: 'Objectif 2',
        content: 'Prendre en compte les évolutions rapides du secteur des NTIC pour les mettre\n' +
            'au profit de la jeunesse africaine par le biais de conférences, d’ateliers, de\n' +
            'formations et de marathons de programmation et de création d’entreprises.',
    },
    {
        title: 'Objectif 3',
        content: 'Contribuer à l’émergence d’une société de l’information démocratique,\n' +
            'inclusive, ouverte et transparente.',
    },
    {
        title: 'Objectif 4',
        content: 'Faire la promotion de la culture entrepreneuriale dans l’utilisation\n' +
            'et le développement des outils du numérique et de l’innovation.',
    },
    {
        title: 'Objectif 5',
        content: 'Renforcer les habilités techniques et humaines des jeunes, afin de susciter la\n' +
            'création d’entreprises et appuyer le développement du secteur privé dans le\n' +
            'domaine du numérique.',
    },
    {
        title: 'Objectif 6',
        content: ' Initier et développer par et pour les jeunes, des projets novateurs répondant\n' +
            'aux défis sociaux et économiques des sociétés africaines.',
    },
    {
        title: 'Objectif 7',
        content: 'Accélérer les valeurs en entreprenariat',
    },
];

export default class ObjectifsPage extends React.Component{


    state = {
        activeSections: [],
    };

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
                <Text>{section.content}</Text>
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
                    leftComponent={
                        <Buttons
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
                    centerComponent={{ text: 'Objectifs', style: { color: '#fff' } }}
                />

                <View style={styles.AccordionView}>
                    <Accordion
                        sections={SECTIONS}
                        activeSections={this.state.activeSections}
                        renderSectionTitle={this._renderSectionTitle}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                        onChange={this._updateSections}
                    />
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        margin: 3,
        backgroundColor: 'lightgray',
        padding: 8
    },
    headerText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    },
    content: {
        padding: 10
    },
    AccordionView: {
        padding: 15
    }
})