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
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';


export class YesOrNo extends React.Component {

    handleYesRef = (ref) => this.yes = ref;
    handleNoRef = (ref) => this.no = ref;
    handleButtonRef = (ref) => this.ok = ref;

    pulseYes = () => this.yes.pulse(500).then();
    pulseNo = () => this.no.pulse(500).then();
    pulseButton = () => this.ok.pulse(400).then(()=>this.handleButtonPress());
    shakeButton = () => this.ok.shake(400);

    static navigationOptions = ({ navigation, screenProps }) => ({
        header: null
    });

    constructor(props) {
        super(props);
        this.state={loading: false, clicked: false, YesNoSelected: null, send: false, hit: null, rightQuestion: null};
    }

    async componentWillMount()
    {
    }

    async handleButtonPress(index)
    {
        this.setState({send: true});
    }


    choisePress(index)
    {
        this.setState({YesNoSelected: index, clicked: true});
        index === 0 ? this.pulseYes() : this.pulseNo();
    }


    selectYesOrNoRender()
    {
        if (!this.state.send)
        {
            return(
                <View style={styles.card}>
                    <TouchableOpacity onPress={()=>this.choisePress(0)} style={styles.YesNoButton}>
                        <Animatable.View  ref={this.handleYesRef} iterationCount={1} direction='normal' easing={'ease'}>
                            <BlackText style={this.state.YesNoSelected === 0 ?  styles.YesNoButtonLabelSelected : styles.YesNoButtonLabel}>
                                SIM
                            </BlackText>
                        </Animatable.View>
                    </TouchableOpacity>

                    <View style={{backgroundColor: '#ddd', height: '100%', width: '1%'}}/>

                    <TouchableOpacity onPress={()=>this.choisePress(1)} style={styles.YesNoButton}>
                        <Animatable.View  ref={this.handleNoRef} iterationCount={1} direction='normal' easing={'ease'}>
                            <BlackText style={this.state.YesNoSelected === 1 ?  styles.YesNoButtonLabelSelected : styles.YesNoButtonLabel}>
                                NÃO
                            </BlackText>
                        </Animatable.View>
                    </TouchableOpacity>
                </View>
            )
        }else
        {
            return(
                <View style={styles.card}>
                    <View style={styles.YesNoButton}>
                        <BlackText style={this.state.rightQuestion !== 0 ? (this.state.YesNoSelected === 0 ?  styles.YesNoButtonLabelSelected : styles.YesNoButtonLabel) : styles.rightSelected}>
                            SIM
                        </BlackText>
                    </View>

                    <View style={{backgroundColor: '#ddd', height: '100%', width: '1%'}}/>

                    <View style={styles.YesNoButton}>
                        <BlackText style={this.state.rightQuestion !== 1 ? (this.state.YesNoSelected === 1 ?  styles.YesNoButtonLabelSelected : styles.YesNoButtonLabel) : styles.rightSelected}>
                            NÃO
                        </BlackText>
                    </View>
                </View>
            )
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

                {this.selectYesOrNoRender()}


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
        justifyContent: 'center',
    },
    YesNoButtonLabel:{
        fontSize: 36,
        color: '#ccc'
    },
    YesNoButtonLabelSelected:{
        fontSize: 36,
        color: '#444'
    },
    rightSelected:{
        fontSize: 36,
        color: Colors.lightGreen
    },
    card:{
        width: WIDTH*0.8,
        height: HEIGHT*0.15,
        backgroundColor: Colors.white,
        borderRadius: 10,
        marginTop: 30,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 15,
        elevation: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

});