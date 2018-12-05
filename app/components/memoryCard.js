import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, KeyboardAvoidingView, Alert, AsyncStorage,ActivityIndicator} from 'react-native';
import Colors from "../assets/Colors";
import {HEIGHT, WIDTH} from "../assets/CommonStyles";
import {BoldText, LightText} from "../components/StyledText";
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';

export class MemoryCard extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        header: null
    });

    handleButtonRef = (ref) => this.ok = ref;

    pulseButton = () => this.ok.pulse(400).then();
    pulseReveal = () => this.ok.pulse(400).then(()=> this.handleReveal());

    constructor(props) {
        super(props);
        this.state={reveal: false}
    }

    async componentWillMount()
    {
    }

    handleReveal()
    {
        if (this.props.canFlip()) {

            this.props.onFlip(this.props.id);

            this.setState({reveal: true})
        }

        if (this.props.shouldFlipBack)
        {
            console.log('ok')
            setTimeout(()=>{this.setState({reveal: false})}, 2000);
            this.props.onFlipBack();
        }
    }

    render()
    {
        if (this.state.reveal) {
            return (
                <TouchableOpacity style={{marginTop: 30}} onPress={this.pulseButton} activeOpacity={0.9}>
                    <Animatable.View ref={this.handleButtonRef} iterationCount={1} direction='normal' easing={'ease'} style={[styles.card, {marginTop: 0}]}>
                        <View style={{flex: 1, borderRadius: 20, alignItems: 'center', justifyContent: 'space-around'}}>
                            <LightText style={{fontSize: 14, color: '#000', letterSpacing: 1.5}}>
                                {this.props.title}
                            </LightText>
                            <Image style={{height: '70%', width: '90%', resizeMode: 'cover', marginBottom: 10, borderRadius: 10}} source={require('../assets/images/art01.jpg')}/>
                        </View>
                    </Animatable.View>
                </TouchableOpacity>
            );
        }else
        {
            return(
                <TouchableOpacity style={{marginTop: 30}} onPress={this.pulseReveal} activeOpacity={0.9}>
                    <Animatable.View ref={this.handleButtonRef} iterationCount={1} direction='normal' easing={'ease'} style={[styles.card, {marginTop: 0}]}>

                    </Animatable.View>
                </TouchableOpacity>
            )
        }
    }


}

const styles = StyleSheet.create({
    card:{
        height: HEIGHT*0.2,
        width: WIDTH*0.29,
        backgroundColor: Colors.white,
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 15,
        borderRadius: 10,
        marginTop: 35,
        borderWidth: 1,
        borderColor: '#000'
    }
});