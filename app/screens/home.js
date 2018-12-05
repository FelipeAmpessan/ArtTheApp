import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, KeyboardAvoidingView, Alert, AsyncStorage,ActivityIndicator} from 'react-native';
import Colors from "../assets/Colors";
import {WIDTH} from "../assets/CommonStyles";
import {BoldText} from "../components/StyledText";
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {HomeCard} from "../components/homeCard";

export class Home extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        header: null
    });

    constructor(props)
    {
        super(props)
    }
    async componentWillMount()
    {
    }

    render()
    {
        return(
            <View style={{flex:1, backgroundColor: Colors.white,}}>

                <BoldText style={{marginTop: 30, fontSize: 60, width: WIDTH *0.9, alignSelf: 'center'}}>
                    jogos
                </BoldText>

                <ScrollView style={{flex:1, backgroundColor: Colors.white}}>
                    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, marginBottom: 120}}>

                        <HomeCard title={'Exposição portátil'} colors={['#cf59e1', '#793b87']} hasContent={true} onPressLock={()=>Alert.alert('Atividade não disponível')} onPress={()=> this.props.navigation.navigate('Exposition')}/>

                        <HomeCard title={'Laboratório de curadoria'} colors={['#53aae1', '#254287']} hasContent={false} onPressLock={()=>Alert.alert('Atividade não disponível')} onPress={()=> this.props.navigation.navigate('Curatorship')}/>

                        <HomeCard title={'Memória'} colors={['#80e19b', '#328731']} hasContent={true} onPressLock={()=>Alert.alert('Atividade não disponível')} onPress={()=> this.props.navigation.navigate('Memory')}/>

                        <HomeCard title={'Conectando'} colors={['#e16e6b', '#87241b']} hasContent={false} onPressLock={()=>Alert.alert('Atividade não disponível')} onPress={()=> this.props.navigation.navigate('Connect')}/>

                    </View>
                </ScrollView>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    card:{
        height: 160,
        width: WIDTH*0.9,
        backgroundColor: Colors.white,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 15,
        elevation: 15,
        borderRadius: 20,
        marginTop: 35
    }
});