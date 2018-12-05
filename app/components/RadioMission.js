import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Platform,
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
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

export class RadioMission extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        header: null
    });

    handleButtonRef = (ref) => this.ok = ref;

    pulseButton = () => this.ok.pulse(400).then(()=>this.handleButtonPress());
    shakeButton = () => this.ok.shake(400);

    constructor(props) {
        super(props);
        this.state={loading: false, radioValue: -1, send: false, clicked: false,
            radio_props: [{label: 'cursus nec turpis et, rutrum interdum est. Ut vitae justo venenatis', value: 0 },
                            {label: 'cursus nec turpis et, rutrum interdum est. Ut vitae justo venenatis', value: 1 },
                            {label: 'cursus nec turpis et, rutrum interdum est. Ut vitae justo venenatis', value: 2 },
                            {label: 'cursus nec turpis et, rutrum interdum est. Ut vitae justo venenatis', value: 3 },]
            , rightQuestion: null};
    }

    async componentWillMount()
    {
    }
    
    async handleButtonPress()
    {
        this.setState({send: true})
    }
    
    onRadioButtonPress(index)
    {
        if (!this.state.send) {
            this.setState({radioValue: index, clicked: true});
        }
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
                        <BlackText style={[CommonStyles.largeButtonLabel,{color: '#000', fontSize: 26}]}>
                            Resposta enviada
                        </BlackText>
                        <BlackText style={[CommonStyles.largeButtonLabel,{color: '#000', fontSize: 16, marginTop: 5, opacity: 0.5, textAlign: 'center'}]}>
                            {!this.props.isLast ? 'Clique para avançar ⇒' : 'Clique para voltar para a tela inicial'}
                        </BlackText>
                    </View>
                </TouchableOpacity>
            )
        }
    }

    render()
    {
        return(
            <View style={{height: '100%', alignItems: 'center', justifyContent: 'space-between'}}>

                <BoldText style={CommonStyles.missionText}>
                    {this.props.question}
                </BoldText>

                <View style={styles.card}>
                    <RadioForm style={{alignSelf: 'center', justifyContent: 'space-between', alignItems: 'center', width: '90%'}}>
                        {this.state.radio_props.map((obj, i) => {
                            return(
                                <RadioButton labelHorizontal={true} key={i}  animation={true}>
                                    <RadioButtonInput
                                        obj={obj}
                                        index={i}
                                        borderWidth={1}
                                        buttonInnerColor={Colors.darkPurple}
                                        buttonOuterColor={this.state.radioValue === i ? Colors.darkPurple : '#aaa'}
                                        buttonSize={20}
                                        buttonOuterSize={30}
                                        buttonWrapStyle={{marginRight: Platform.OS === 'ios' ? 5 : 0, marginVertical: 5}}
                                        onPress={()=> this.onRadioButtonPress(i)}
                                        isSelected={this.state.radioValue === i || this.state.rightQuestion === i}
                                        buttonStyle={{backgroundColor: 'rgba(0,0,0,0.1)', }}
                                    />
                                    <RadioButtonLabel
                                        obj={obj}
                                        index={i}
                                        labelHorizontal={true}
                                        labelStyle={{fontFamily:'modernica-bold' ,fontSize: 16, color: this.state.radioValue === i ? Colors.darkPurple : '#aaa', textAlign: 'left'}}
                                        labelWrapStyle={{width: '90%'}}
                                        onPress={()=> this.onRadioButtonPress(i)}
                                    />
                                </RadioButton>
                            )
                        })}

                    </RadioForm>
                </View>

                {this.selectButtonRender()}
            </View>
        );
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
        color: '#444'
    },
    card:{
        width: WIDTH*0.85,
        maxHeight: HEIGHT*0.45,
        backgroundColor: Colors.white,
        borderRadius: 10,
        marginTop: 25,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 15,
        elevation: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20
    },

});