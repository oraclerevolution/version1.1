import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { Button as Buttons, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Retrofile1 extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
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
                    centerComponent={{ text: 'AWF Retrospective', style: { color: '#fff' } }}
                />
                <View style={styles.container}>
                    <Text style={styles.title}>DECLOISONNER LES PAYS ET ENTAMER LA CREATION D'UN ÉCOSYSTEME D'INNOVATION NUMÉRIQUE CONTINENTAL</Text>
                    <View>

                        <Text style={styles.titlestyle}>NOMBRE DE PAYS AFRICAINS:</Text>
                        <Text>2014: 19</Text>
                        <Text>2015: 25</Text>
                        <Text>2016: 24</Text>
                        <Text>2017: 26</Text>
                        <Text>2018: 31</Text>
                    </View>

                    <View>

                        <Text style={styles.titlestyle}>NOMBRE D'INTERVENANTS ET EXPERTS DE CONTENUS AFRICAINS MOBILISÉS:</Text>
                        <Text>2014: 40</Text>
                        <Text>2015: 50</Text>
                        <Text>2016: 57</Text>
                        <Text>2017: 55</Text>
                        <Text>2018: 61</Text>
                    </View>

                    <View>

                        <Text style={styles.titlestyle}>LES PAYS PRESENTS AU FESTIVAL:</Text>
                        <Text>GABON, MALI, MADAGASCAR, NIGERIA, TOGO, MAROC, MAURITANIE, BÉNIN, NIGER, ILE MAURICE, TCHAD, GNAHA, BURKINA FASO, SENEGAL, CAMÉROUN, CONGO BRAZZAVILLE, RDC, KENYA, CENTRAFIQUE, GUINÉE, TUNISIE, ALGERIE, RWANDA</Text>
                    </View>
                    

                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:16
    },
    title: {
        textAlign:'center',
        fontSize: 18,
        marginBottom: 15,
        textAlign: 'center'
    },
    titlestyle:{
        marginTop: 15,
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'left',
    }

})