import React from 'react'
import {View,StyleSheet, Text} from 'react-native'
import {Header} from 'react-native-elements'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

import Accordion from 'react-native-collapsible/Accordion';

const SECTIONS = [
    {
        title: 'ACCELAFRIK CAMP NUMÉRIQUE',
        content: '• Programme d’accélération et de formation de 6 mois dédié aux\n' +
            'entrepreneurs numériques.\n' +
            '• Donner un encadrement intensif aux entrepreneurs pour une meilleure\n' +
            'gestion de leurs futures entreprises.\n' +
            '• 25 startups avec un accent qui sera mis sur la parité hommes et femmes.\n' +
            '• Sur une superficie de 6 000 m 2 dans la localité de SAMO sur la route\n' +
            'd’Assinie en Côte d’Ivoire\n' +
            '• Le campus se veut Énergie Zéro.',
    },
    {
        title: 'AFRICAN CITY CHALLENGE',
        content: '• Concours labellisé par la COP 22.\n' +
            '• S’adresse aux blogueurs et reporters web qui s’intéressent au devenir\n' +
            'des villes africaines.\n' +
            '• Plusieurs pays participants : Niger, Burkina Faso, Togo, Bénin, Tchad, Sénégal,\n' +
            'Côte d’Ivoire.\n' +
            '• Mettre la lumière sur les citadins qui pensent la ville de demain en imaginant\n' +
            'des solutions innovantes.\n' +
            '• Le Lab Urbain avec les gagnants du concours. Il s’est traduit par des séances de\n' +
            'co-création avec des jeunes citadins de la commune d’Attécoubé à Abidjan.',
    },
    {
        title: 'CONCOURS CHAMPIS DES TIC',
        content: 'Évènement novateur, impact significatif sur la sensibilisation\n' +
            'et la mobilisation de la jeunesse.\n' +
            'Organisé 6 mois avant le début du festival qui implique plus de 50 collèges.\n' +
            'Se familiariser et d’entamer un processus d’apprentissage sur les nouvelles\n' +
            'technologies et leurs tendances tout en les incitant à faire preuve de créativité\n' +
            'et d’innovation.\n' +
            'Finale couverte par la télévision nationale ivoirienne devant plus de 1000\n' +
            'personnes.',
    },
    {
        title: 'LES PRIX AUDIOVISUELS',
        content: 'Prix Documentaire\n' +
            'Prix Publicité Prix Fiction\n' +
            'Prix Humour\n' +
            'Prix de la meilleure animation originale (dessin animé, 2D, 3D, etc.)',
    },
    {
        title: 'LES PRIX INNOVATIONS',
        content: 'Prix Jeux\n' +
            'Prix Applications\n' +
            'Prix meilleurs Sites Web',
    },
    {
        title: 'LE PARCOURS NUMÉRIQUE FRANCOPHONE',
        content: 'Fruit d’une impulsion de l’Organisation Internationale de la Francophonie,\n' +
            'des acteurs francophones de la mobilité jeunesse (BIJ, LOJIQ, OFQJ) et les\n' +
            'organisateurs francophones d’évènements liés au numérique (Africa Web Festival,\n' +
            'Web à Québec, Web2day de Nantes, Kikk Festival de Namur).\n' +
            'Accroître la mobilité des jeunes professionnels et entrepreneurs à l’occasion\n' +
            'd’évènements internationaux sur l’innovation numérique et les nouvelles\n' +
            'technologies. Opportunité pour jeunes entrepreneurs africains de découvrir\n' +
            'différents écosystèmes numériques, de présenter leurs projets et entreprises\n' +
            'à des investisseurs et de participer à des activités de réseautage.',
    },
    {
        title: 'LE CAMPUS AWF',
        content: 'À la 5e\n' +
            ' édition nous avons mis en place le CAMPUS AWF.\n' +
            'Pendant 3 jours environ, 300 jeunes venus de partout en Afrique ont pris leurs\n' +
            'quartiers au Village de la francophonie, ont mangé ensemble, discuté et fêté. Il y\n' +
            'avait aussi entre eux une centaine de finissants des universités et grandes écoles\n' +
            'd’Abidjan. Ils ont échangé, parlé de leurs besoins, de leurs attentes, vis-à-vis des\n' +
            'dirigeants, des parents, de leur avenir, de leurs rêves mais aussi de leurs peurs.\n' +
            'Ce fut un grand succès que nous comptons pérenniser. Nous avons bénéficier du\n' +
            'soutien de CFI.',
    },
    {
        title: 'LE RÉSEAU DES AFFAIRES AWF',
        content:'Née de la dynamique de Africa Web Festival, le Réseau des Affaires AWF, est une\n' +
            'plateforme active tout au long de l’année, offrant des opportunités\n' +
            'diverses dans le domaine du numérique et de l’innovation en Afrique.\n' +
            'À la fois virtuel et physique, les Réseaux des Affaires AWF permettent :\n' +
            '• De booster ou de favoriser les affaires ;\n' +
            '• D’échanger des connaissances et favoriser la prospective ;\n' +
            '• D’avoir des informations sur les tendances du marché.\n' +
            'Le Réseau des Affaires AWF c’est aussi 3 pôles :\n' +
            'LE RÉSEAU AWF. Ce réseau d’experts de l’écosystème numérique venant\n' +
            'd’Afrique et du reste du monde est composé d’anciens intervenants et\n' +
            'contributeurs de Africa Web Festival.\n' +
            'LE MARCHÉ DES AFFAIRES. Ce marché est une plateforme virtuelle ouverte\n' +
            'aux structures cherchant des opportunités sur le marché du numérique et de\n' +
            'l’innovation en Afrique.\n' +
            'LE CLUB DES ÉTOILES. C’est un regroupement d’investisseurs engagés à financer\n' +
            'des projets et structures existantes ayant un fort impact sur le continent africain.'
    },
    {
        title: 'SPEED JOB',
        content:'Afin de concrétiser son objectif de contribuer à la création d’emplois.\n' +
            'Outil de recrutement permettant aux entreprises de rencontrer Plusieurs jeunes\n' +
            'professionnels à la fois.\n' +
            'Africa Web Festival constitue vraiment un évènement phare pour rencontrer les\n' +
            'professionnels du web ivoiriens, mais plus largement de toute l’Afrique, de créer\n' +
            'des liens professionnels et se faire une opinion sur l’état des lieux du secteur du\n' +
            'numérique africain en évolution constante.'
    }
];

export default class ProjectsPage extends React.Component{

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
                        <Button
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
                    centerComponent={{ text: 'Projets', style: { color: '#fff' } }}
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