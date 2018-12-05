import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
    TextInput,
    KeyboardAvoidingView,
    Alert,
    ScrollView,
    ActivityIndicator,
    AsyncStorage
} from 'react-native';
import Colors from "../assets/Colors";
import {NavigationActions} from 'react-navigation'
import {CommonStyles, HEIGHT, WIDTH} from "../assets/CommonStyles";
import {BlackText, BoldText} from "./StyledText";
import Slider from "react-native-slider";
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

export class SliderMission extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        header: null
    });

    handleButtonRef = (ref) => this.ok = ref;

    pulseButton = () => this.ok.pulse(400).then(()=>this.handleButtonPress());
    shakeButton = () => this.ok.shake(400);

    constructor(props) {
        super(props);
        this.state={loading: false, send: false, value: 0, clicked: false};
    }

    async componentWillMount()
    {
    }

    async handleButtonPress(index)
    {
        this.setState({send: true})
    }

    selectButtonRender()
    {
        if (!this.state.send)
        {
            return(
                <TouchableOpacity onPress={()=> this.state.clicked ? this.pulseButton() : this.shakeButton()}>
                    <Animatable.View style={[CommonStyles.largeYellowButton, {height: 60, alignSelf: 'center', shadowColor: Colors.darkPurple, shadowRadius: 15, borderWidth: 2, borderColor: Colors.darkPurple, backgroundColor: '#fff', marginBottom: 40}]} ref={this.handleButtonRef} iterationCount={1} direction='normal' easing={'ease'}>
                        <BlackText style={CommonStyles.largeButtonLabel}>
                            OK
                        </BlackText>
                    </Animatable.View>
                </TouchableOpacity>
            )
        }else
        {
            return(
                <TouchableOpacity onPress={()=>this.props.nextQuestion()}>
                    <View style={CommonStyles.largeGreenButtonTransparent}>
                        <BlackText style={[CommonStyles.largeButtonLabel,{color: Colors.darkGreen, fontSize: 26}]}>
                            Resposta enviada
                        </BlackText>
                        <BlackText style={[CommonStyles.largeButtonLabel,{color: Colors.darkGreen, fontSize: 16, marginTop: 5, opacity: 0.5, textAlign: 'center'}]}>
                            {!this.props.isLast ? 'Clique para avançar ⇒' : 'Clique para voltar para a tela inicial'}
                        </BlackText>
                    </View>
                </TouchableOpacity>
            )
        }
    }

    changeValue(value)
    {
        this.setState({value, clicked: true})

    }

    render()
    {
        return(
            <View style={{height: '100%', alignItems: 'center', justifyContent: 'space-between'}}>

                <BoldText style={CommonStyles.missionText}>
                    {this.props.question}
                </BoldText>

                <View style={styles.card}>
                    <BlackText style={styles.number}> {this.state.value} </BlackText>
                    <Slider
                        style={{width: '90%', marginTop:10}}
                        trackStyle={{height: 15, borderRadius: 20, backgroundColor: 'rgba(0,0,0,0.1)'}}
                        thumbStyle={{width: 30, height: 30, borderRadius: 15, backgroundColor: Colors.lighPurple, borderWidth: 6, borderColor: Colors.white, elevation:5,shadowOpacity: 0.3, shadowRadius: 7, shadowOffset: {width: 0, height: 0,},}}
                        thumbTintColor={Colors.darkPurple}
                        animateTransitions={true}
                        minimumTrackTintColor={Colors.lighPurple}
                        minimumValue={0}
                        maximumValue={50}
                        step={1}
                        onValueChange={(value)=>this.changeValue(value)}
                        value={this.state.value}
                        disabled={this.state.send}
                    />

                    <View style={styles.numberContainer}>
                        <BlackText style={styles.number}> 0 </BlackText>
                        <BlackText style={styles.number}> 50 </BlackText>
                    </View>
                </View>

            {this.state.send ?
            <View style={{alignItems: 'center'}}>
                <BlackText style={{fontSize: 18, color: Colors.darkPurple}}>
                    resposta certa:
                </BlackText>
                <BlackText style={{fontSize: 26, color: Colors.lighPurple, marginTop: 5}}>
                    10
                </BlackText>
            </View> : null}
            {this.selectButtonRender()}

        </View>
        )
    }


}

const styles = StyleSheet.create({
    YesNoButton:{
        width: '49%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    YesNoButtonLabel:{
        fontSize: 36,
        color: '#ccc'
    },
    YesNoButtonLabelSelected:{
        fontSize: 36,
        color: Colors.lightGreen
    },
    card:{
        width: WIDTH*0.8,
        height: HEIGHT*0.2,
        backgroundColor: Colors.white,
        borderRadius: 10,
        marginTop: 30,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 15,
        elevation: 8,
        alignItems: 'center',
        justifyContent: 'center',

    },
    numberContainer:{
        flexDirection:'row',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    number:{
        fontSize: 20,
        color: Colors.lightGreen
    }
});

