import React from 'react'
import {View, StyleSheet, Image, Text, FlatList, ScrollView, TouchableOpacity} from 'react-native'
import { Button, Header } from 'react-native-elements';

export default class Congratulations extends React.Component{
    render(){
        return(
            <View style={styles.container_view}>
                <Header
                    containerStyle={{
                        backgroundColor: '#0a2849',
                    }}
                    centerComponent={{ text: 'FÉLICITATIONS !', style: { color: '#fff' } }}
                />
                <View style={{flex:1,justifyContent: 'center', alignItems: 'center', padding:10}}>
                    <Image
                        source={require('../assets/icon-ok.png')}
                        style={styles.strech}
                    />
                    <Text style={{marginBottom: 20, fontSize:20, textAlign:'center'}}>Votre demande à bien été prise en compte. Nous vous recontacterons par mail.</Text>

                    <Text style={{fontWeight: "bold", fontSize:18, marginBottom:15}}>L'équipe AWF.</Text>

                    <TouchableOpacity style={styles.btn_soumettre}>
                        <Button
                            title={"Revenir à l'accueil"}
                            onPress={()=>this.props.navigation.navigate('Accueil')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor:'#0a2849', height:80,}}>
                    <Text style={{textAlign:'center', color:'white',fontSize:12, padding:10}}>© Africa Web Festival - TOUS DROITS RESERVES</Text>
                    <Text style={{textAlign:'center', color:'white',fontSize:12}}>App powered by WEENOVIT ®</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container_view: {
        flex: 1
    },
    btn_soumettre: {
        marginTop: 10
    },
    strech: {}
})
