import React from 'react';
import {StyleSheet,View, Text, TouchableOpacity, Image, Platform, TextInput, KeyboardAvoidingView, Alert, AsyncStorage,ActivityIndicator} from 'react-native';
import Colors from "../assets/Colors";
import {NavigationActions} from 'react-navigation'
import {CommonStyles, HEIGHT, WIDTH} from "../assets/CommonStyles";
import LinearGradient from 'react-native-linear-gradient';
import {BlackText, BoldText, RegularText} from "../components/StyledText";
import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';

const dot = <View style={{backgroundColor:'rgba(0,0,0,0.1)', width: 24, height: 24,borderRadius: 12, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
const activeDot =
    <View style={{backgroundColor:'rgba(0,0,0,0.1)', width: 26, height: 26,borderRadius: 13, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, alignItems: 'center', justifyContent: 'center'}} >
        <View style={{backgroundColor:'#fff', width: 16, height: 16,borderRadius: 10, shadowColor: '#fff', shadowOpacity: 0.8, shadowRadius: 1, elevation: 8, shadowOffset: {width: 0, height: 2}, marginBottom: 3}}/>
    </View>


export class Login extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        header: null
    });

    handleButtonRef = (ref) => this.ok = ref;

    pulseButton = () => this.ok.pulse(400).then(()=>this.handlePress());

    constructor(props) {
        super(props);
        this.state={loading: false, name: '', password: ''};

        this.focusNextField = this.focusNextField.bind(this);

        this.inputs = {};
    }

    handlePress()
    {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'Home'})],
        });
        this.props.navigation.dispatch(resetAction);
    }

    focusNextField(id) {
        this.inputs[id].focus();
    }

    render()
    {
        return(
            <KeyboardAvoidingView style={{flex: 1}} behavior={'padding'}>
                <LinearGradient colors={['#cf59e1', '#793b87']} style={{flex:1,}}>

                    <View style={{flex: 1, marginTop: 50}}>
                        <View style={{justifyContent: 'flex-start', alignItems: 'center'}}>
                            <BlackText style={CommonStyles.label}>
                                NOME
                            </BlackText>
                            <TextInput style={CommonStyles.textInput} placeholder={'Digite seu nome'}
                                       placeholderTextColor={'#e9e9e9'}
                                       underlineColorAndroid="transparent"
                                       onChangeText={name => this.setState({name})} value={this.state.name}
                                       returnKeyType={'next'} onSubmitEditing={() => { this.focusNextField('password'); }}
                                       maxLength={150} ref={ input => { this.inputs['name'] = input; }}/>
                            <View style={{width: WIDTH * 0.9, height: 1, backgroundColor: '#acacac'}}/>
                        </View>

                        <View style={{justifyContent: 'flex-start', alignItems: 'center', marginTop: 20}}>
                            <BlackText style={CommonStyles.label}>
                                SENHA
                            </BlackText>
                            <TextInput style={CommonStyles.textInput} placeholder={'Digite sua senha'}
                                       placeholderTextColor={'#e9e9e9'}
                                       underlineColorAndroid="transparent"
                                       onChangeText={password => this.setState({password})} value={this.state.password}
                                       returnKeyType={'go'} onSubmitEditing={() => { this.handlePress() }}
                                       maxLength={150} ref={ input => { this.inputs['password'] = input; }}/>
                            <View style={{width: WIDTH * 0.9, height: 1, backgroundColor: '#acacac'}}/>
                        </View>
                    </View>

                    <TouchableOpacity onPress={this.pulseButton}>
                        <Animatable.View ref={this.handleButtonRef} iterationCount={1} direction='normal' easing={'ease'} style={{height: 60, alignSelf: 'center', width: WIDTH, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.yellow}}>
                            <RegularText style={CommonStyles.largeButtonLabel}>
                                Entrar
                            </RegularText>
                        </Animatable.View>
                    </TouchableOpacity>
                </LinearGradient>
            </KeyboardAvoidingView>
        );
    }


}

const styles = StyleSheet.create({
    card:{
        width: WIDTH*0.8,
        height: HEIGHT*0.55,
        backgroundColor: Colors.white,
        borderRadius: 10,
        marginTop: 30,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 15,
        elevation: 15,
    },
    text:{
        fontSize: 20,
        color: '#555',
        width: '85%',
        alignSelf: 'center',
        marginTop: 10,
    }
});