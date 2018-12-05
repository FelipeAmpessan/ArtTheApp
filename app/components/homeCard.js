import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, KeyboardAvoidingView, Alert, AsyncStorage,ActivityIndicator} from 'react-native';
import Colors from "../assets/Colors";
import {WIDTH} from "../assets/CommonStyles";
import {BoldText} from "../components/StyledText";
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

let shadowColor='#000'

export class HomeCard extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        header: null
    });

    handleButtonRef = (ref) => this.ok = ref;

    pulseButton = () => this.ok.pulse(400).then(()=> this.props.onPress());
    shakeButton = () => this.ok.shake(800).then(()=> this.props.onPressLock());

    constructor(props) {
        super(props);
        shadowColor = this.props.colors[0];
    }

    async componentWillMount()
    {
    }

    render()
    {
        return(
            <TouchableOpacity style={{marginTop: 30}} onPress={this.props.hasContent ? this.pulseButton : this.shakeButton} activeOpacity={0.9}>
                <Animatable.View ref={this.handleButtonRef} iterationCount={1} direction='normal' easing={'ease'} style={[styles.card,{marginTop: 0, shadowColor: this.props.hasContent ? this.props.colors[0] : '#444'}]}>
                    <LinearGradient colors={this.props.hasContent ? this.props.colors : ['#ccc','#6f6f6f']} style={{flex:1, borderRadius: 20, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 30}}>
                        <BoldText style={{fontSize: 45, color: this.props.hasContent ? Colors.white : '#444', letterSpacing: 1.5, textAlign: 'center'}}>
                            {this.props.title}
                        </BoldText>
                    </LinearGradient>
                </Animatable.View>
            </TouchableOpacity>
        );
    }


}

const styles = StyleSheet.create({
    card:{
        height: 160,
        width: WIDTH*0.9,
        backgroundColor: Colors.white,
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 15,
        borderRadius: 20,
        marginTop: 35
    }
});