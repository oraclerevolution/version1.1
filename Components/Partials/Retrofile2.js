import React from 'react'
import {View, StyleSheet, Text, ScrollView} from 'react-native'
import { Button as Buttons, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Retrofile2 extends React.Component{
    render(){
        return(
            <View>
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
                <ScrollView style={styles.container}>
                    <Text style={styles.title}>MESURE D'IMPACT A COURT ET MOYEN TERME</Text>

                    <View>

                        <Text style={styles.titlestyle}>PARTICIPANTS:</Text>
                        <Text>2014: 5425</Text>
                        <Text>2015: 6500</Text>
                        <Text>2016: 6820</Text>
                        <Text>2017: 7035</Text>
                        <Text>2018: 7820</Text>
                    </View>

                    <View>

                        <Text style={styles.titlestyle}>NOMBRE D'ENTREPRISES (START-UPS):</Text>
                        <Text>2014: 69</Text>
                        <Text>2015: 75</Text>
                        <Text>2016: 78</Text>
                        <Text>2017: 85</Text>
                        <Text>2018: 102</Text>
                    </View>

                    <View>

                        <Text style={styles.titlestyle}>ÉLÈVES ET ÉTUDIANTS:</Text>
                        <Text>2014: 2800</Text>
                        <Text>2015: 3162</Text>
                        <Text>2016: 3531</Text>
                        <Text>2017: 3640</Text>
                        <Text>2018: 4620</Text>
                    </View>

                    <View>

                        <Text style={styles.titlestyle}>INCUBATEURS, ACCÉLÉRATEURS, FONDATIONS, ETC.:</Text>
                        <Text>2014: 15</Text>
                        <Text>2015: 23</Text>
                        <Text>2016: 30</Text>
                        <Text>2017: 35</Text>
                        <Text>2018: 106</Text>
                    </View>

                    <View>

                        <Text style={styles.titlestyle}>INCUBATEURS, ACCÉLÉRATEURS, FONDATIONS, ETC.:</Text>
                        <Text>2014: 15</Text>
                        <Text>2015: 23</Text>
                        <Text>2016: 30</Text>
                        <Text>2017: 35</Text>
                        <Text>2018: 106</Text>
                    </View>

                    <View>

                        <Text style={styles.titlestyle}>NOMBRE D'INNOVATIONS TECHNOLOGIQUES DEVELOPEES PAR LES PARTICIPANTS:</Text>
                        <Text>2014: 6</Text>
                        <Text>2015: 8</Text>
                        <Text>2016: 8</Text>
                        <Text>2017: 11</Text>
                        <Text>2018: 35</Text>
                    </View>

                    <View>

                        <Text style={styles.titlestyle}>NOMBRE DE PRODUCTIONS AUDIOVISUELLES NUMERIQUES DEVELOPPEES:</Text>
                        <Text>2014: 105</Text>
                        <Text>2015: 101</Text>
                        <Text>2016: 50</Text>
                        <Text>2017: 47</Text>
                        <Text>2018: 40</Text>
                    </View>
                </ScrollView>
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
        fontFamily: 'BlissPro-Bold',
        fontSize: 18,
        marginBottom: 15,
        textAlign: 'center'
    },
    titlestyle:{
        marginTop: 15,
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'left',
        fontFamily: 'BlissPro-Bold'
    }
})