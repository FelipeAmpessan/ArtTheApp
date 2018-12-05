import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, KeyboardAvoidingView, Alert, AsyncStorage,ActivityIndicator} from 'react-native';
import {CommonStyles, HEIGHT, WIDTH} from "../assets/CommonStyles";
import Colors from "../assets/Colors";
import {BlackText, BoldText, LightText, RegularText} from "../components/StyledText";

export class ViewArt extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        header: null
    });

    constructor(props) {
        super(props);
    }

    async componentWillMount()
    {
    }

    render()
    {
        return(
            <View style={CommonStyles.background}>

                <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', width: WIDTH *0.2, marginTop: 30}} onPress={()=> this.props.navigation.goBack()}>
                    <View style={{width: 30, height: 30, borderRadius: 25, backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: 'center', alignItems: 'center'}}>
                        <BlackText style={{fontSize: 20, color: Colors.white}}>
                            x
                        </BlackText>
                    </View>
                </TouchableOpacity>

                <BoldText style={{fontSize: 46, width: WIDTH, alignSelf: 'center', textAlign: 'center', marginTop: 10}}>
                    {this.props.navigation.state.params.title}
                </BoldText>

                <ScrollView style={{flex: 1}}>
                    <View style={{flex: 1, marginBottom: 50, width: WIDTH, alignItems: 'center'}}>
                        <View style={{height: HEIGHT*0.6, width: '90%', resizeMode: 'cover', marginBottom: 10, borderRadius: 10, marginTop: 40, padding: 10, borderWidth: 2, borderColor: Colors.yellow}}>
                            <Image style={{height: '100%', width: '100%', resizeMode: 'cover', borderRadius: 10}} source={require('../assets/images/art01.jpg')}/>
                        </View>

                        <View style={{justifyContent: 'flex-start', alignItems: 'center', marginVertical: 25, marginTop: 25}}>
                            <BlackText style={[CommonStyles.label,{color: Colors.yellow, fontSize: 22}]}>
                                nome do artista
                            </BlackText>
                            <LightText style={[CommonStyles.label,{color: Colors.lighPurple, fontSize: 26}]}>
                                Lorem Nome
                            </LightText>
                        </View>

                        <View style={{justifyContent: 'flex-start', alignItems: 'center'}}>
                            <BlackText style={[CommonStyles.label,{color: Colors.yellow, fontSize: 22}]}>
                                título da obra
                            </BlackText>
                            <LightText style={[CommonStyles.label,{color: Colors.lighPurple, fontSize: 26}]}>
                                Lorem titulo
                            </LightText>
                        </View>

                        <View style={{justifyContent: 'flex-start', alignItems: 'center', marginVertical: 25}}>
                            <BlackText style={[CommonStyles.label,{color: Colors.yellow, fontSize: 22}]}>
                                técnica
                            </BlackText>
                            <LightText style={[CommonStyles.label,{color: Colors.lighPurple, fontSize: 30}]}>
                                Lorem tecnica
                            </LightText>
                        </View>

                        <View style={{justifyContent: 'flex-start', alignItems: 'center'}}>
                            <BlackText style={[CommonStyles.label,{color: Colors.yellow, fontSize: 22}]}>
                                dimensões
                            </BlackText>
                            <LightText style={[CommonStyles.label,{color: Colors.lighPurple, fontSize: 26}]}>
                                25x30
                            </LightText>
                        </View>

                        <View style={{justifyContent: 'flex-start', alignItems: 'center', marginVertical: 25}}>
                            <BlackText style={[CommonStyles.label,{color: Colors.yellow, fontSize: 22}]}>
                                data
                            </BlackText>
                            <LightText style={[CommonStyles.label,{color: Colors.lighPurple, fontSize: 26}]}>
                                30/12/1969
                            </LightText>
                        </View>

                    </View>
                </ScrollView>
            </View>
        );
    }


}

const styles = StyleSheet.create({

});