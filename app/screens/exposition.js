import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput,
    KeyboardAvoidingView,
    Alert,
    AsyncStorage,
    ActivityIndicator,
    Platform
} from 'react-native';
import {CommonStyles, HEIGHT, WIDTH} from "../assets/CommonStyles";
import Colors from "../assets/Colors";
import {BlackText, BoldText, LightText, RegularText} from "../components/StyledText";
import * as Animatable from 'react-native-animatable';
import {MemoryCard} from "../components/memoryCard";
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import {YesOrNo} from "../components/YesOrNo";
import {RadioMission} from "../components/RadioMission";
import {SliderMission} from "../components/MissionSlider";

const dot = <View style={{backgroundColor:'rgba(0,0,0,0.1)', width: 24, height: 24,borderRadius: 12, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
const activeDot =
    <View style={{backgroundColor:'rgba(0,0,0,0.1)', width: 26, height: 26,borderRadius: 13, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, alignItems: 'center', justifyContent: 'center'}} >
        <View style={{backgroundColor: Colors.yellow, width: 16, height: 16,borderRadius: 10, shadowColor: Colors.yellow, shadowOpacity: 0.8, shadowRadius: 1, elevation: 8, shadowOffset: {width: 0, height: 2}, marginBottom: 3}}/>
    </View>

export class Exposition extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        header: null
    });

    handleButtonRef = (ref) => this.ok = ref;

    pulseButton = () => this.ok.pulse(400).then(()=>this.handlePress());

    constructor(props) {
        super(props);
        this.state = {showCover: true, flipCount: 0, shouldFlipBack: false, showQuestion: false, loading: false, tutorial: [{text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id'},{text: 'nec vehicula ex. Ut viverra, velit vitae tristique porttitor, ante ligula elementum purus, in elementum lectus'},{text: 'nisl nec erat. Sed ipsum sem, cursus nec turpis et, rutrum interdum est. Ut vitae justo venenatis'}], index: 0, questionCount: 0 }

        this.handlePress = this.handlePress.bind(this);

    }

    async componentWillMount()
    {
    }

    renderCover()
    {
        if (this.state.showCover) {
            return (
                <View style={{flex: 1}}>
                    <TouchableOpacity onPress={()=>this.setState({showCover: false})} style={{width: WIDTH, alignItems: 'center', justifyContent: 'center', marginTop: 30, height: 50}}>
                        <LightText style={CommonStyles.largeButtonLabel}>
                            pular
                        </LightText>
                    </TouchableOpacity>

                    <Swiper paginationStyle={{bottom: Platform.OS === 'ios' ? 5 : 0}} loop={false} dot={dot} activeDot={activeDot} onIndexChanged={(index)=>this.setState({index})} bounces ref={(swiper) => this.mySwiper = swiper}>
                        <View style={{alignItems: 'center'}}>
                            <BoldText style={CommonStyles.title}>
                                exposição
                            </BoldText>

                            <View style={styles.cardTutorial}>
                                <View style={{width: '80%', height: 250, alignSelf: 'center'}}/>
                                <RegularText style={styles.text}>
                                    {this.state.tutorial[0].text}
                                </RegularText>
                            </View>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <BoldText style={CommonStyles.title}>
                                exposição
                            </BoldText>

                            <View style={styles.cardTutorial}>
                                <View style={{width: '80%', height: 250, alignSelf: 'center'}}/>
                                <RegularText style={styles.text}>
                                    {this.state.tutorial[1].text}
                                </RegularText>
                            </View>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <BoldText style={CommonStyles.title}>
                                exposição
                            </BoldText>

                            <View style={styles.cardTutorial}>
                                <View style={{width: '80%', height: 250, alignSelf: 'center'}}/>
                                <RegularText style={styles.text}>
                                    {this.state.tutorial[2].text}
                                </RegularText>
                            </View>
                        </View>
                    </Swiper>

                    <TouchableOpacity onPress={this.pulseButton}>
                        <Animatable.View ref={this.handleButtonRef} iterationCount={1} direction='normal' easing={'ease'} style={[CommonStyles.largeYellowButton, {height: 60, alignSelf: 'center', shadowColor: Colors.darkPurple, shadowRadius: 15, borderWidth: 2, borderColor: Colors.darkPurple, backgroundColor: '#fff', marginBottom: 40}]}>
                            <RegularText style={CommonStyles.largeButtonLabel}>
                                {this.state.index !== 2 ? 'Próximo' : 'Começar'}
                            </RegularText>
                        </Animatable.View>
                    </TouchableOpacity>
                </View>
            )
        }
    }


    nextQuestion()
    {
        this.setState({questionCount: this.state.questionCount+1})
    }

    selectQuestionType()
    {
        if (this.state.questionCount === 0 || this.state.questionCount === 3)
        {
            return(
                <YesOrNo question={'Sed ipsum sem, cursus nec turpis et, rutrum interdum est. Ut vitae justo venenatis?'} nextQuestion={()=>this.nextQuestion()}/>
            )
        }

        if (this.state.questionCount === 1 || this.state.questionCount === 4)
        {
            return(
                <SliderMission question={'Sed ipsum sem, cursus nec turpis et, rutrum interdum est. Ut vitae justo venenatis?'} nextQuestion={()=>this.nextQuestion()}/>
            )
        }

        if (this.state.questionCount === 2 || this.state.questionCount === 5)
        {
            return(
                <RadioMission question={'Sed ipsum sem, cursus nec turpis et, rutrum interdum est. Ut vitae justo venenatis?'} nextQuestion={()=>this.nextQuestion()}/>
            )
        }

        if (this.state.questionCount > 5)
        {
            return(
                <View style={{height: '100%', alignItems: 'center', justifyContent: 'space-between'}}>
                    <BoldText style={[CommonStyles.missionText,{fontSize: 40}]}>
                        parabéns
                    </BoldText>
                    <BoldText style={[CommonStyles.missionText,{fontSize: 30}]}>
                        clique para ir para a proxima obra
                    </BoldText>

                    <TouchableOpacity onPress={()=> this.setState({showQuestion: false, questionCount: 0})}>
                        <Animatable.View style={[CommonStyles.largeYellowButton, {height: 60, alignSelf: 'center', shadowColor: Colors.darkPurple, shadowRadius: 15, borderWidth: 2, borderColor: Colors.darkPurple, backgroundColor: '#fff', marginBottom: 40}]} ref={this.handleButtonRef} iterationCount={1} direction='normal' easing={'ease'}>
                            <BlackText style={CommonStyles.largeButtonLabel}>
                                OK
                            </BlackText>
                        </Animatable.View>
                    </TouchableOpacity>
                </View>
            )
        }


    }

    selectGameScreen()
    {
        if (this.state.showQuestion)
        {
            return(
                <View style={[styles.card,{height: HEIGHT*0.8}]}>
                    {this.selectQuestionType()}
                </View>
            )
        }else
        {
            return(
                <View>
                    <View style={styles.card}>
                        <LightText style={{marginTop: 10, fontSize: 25, color: '#000', letterSpacing: 1.5}}>
                            LOREM TÍTULO
                        </LightText>
                        <Image source={require('../assets/images/art01.jpg')} style={{width: '90%', height: '80%', resizeMode: 'cover', marginBottom: 20, borderRadius: 20}}/>
                    </View>
                    
                    <View style={{flexDirection: 'row', width: WIDTH*0.9, alignSelf: 'center', justifyContent: 'space-between'}}>
                        <TouchableOpacity style={styles.button} onPress={()=>this.setState({showQuestion: true})}>
                            <Icon name={'heart'} size={25} color={Colors.lighPurple}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={()=>this.setState({showQuestion: true})}>
                            <Icon name={'close'} size={30} color={Colors.lighPurple}/>
                        </TouchableOpacity>
                    </View>
                </View>


            )
        }
    }

    renderGame()
    {
        if (!this.state.showCover) {
            return (
                <View style={{flex: 1}}>
                    <View style={{flexDirection: 'row', width: WIDTH*0.9, marginTop: 30, alignItems: 'center', justifyContent: 'center', alignSelf: 'center'}}>
                        <BoldText style={{fontSize: 60, width: WIDTH * 0.7, alignSelf: 'center'}}>
                            exposição
                        </BoldText>

                        <TouchableOpacity style={{alignItems: 'flex-end', justifyContent: 'center', width: WIDTH*0.2}} onPress={()=> this.props.navigation.goBack()}>
                            <View style={{width: 30, height: 30, backgroundColor: 'rgba(0,0,0,0.2)', alignItems: 'center', justifyContent: 'center', borderRadius: 25}}>
                                <LightText style={{textAlign: 'center', alignSelf: 'center', fontSize: 20}}>
                                    x
                                </LightText>
                            </View>
                        </TouchableOpacity>
                    </View>


                    {this.selectGameScreen()}

                </View>
            )
        }
    }

    handlePress()
    {
        if (this.state.index === 0)
        {
            this.mySwiper.scrollBy(1)
        }
        if (this.state.index === 1)
        {
            this.mySwiper.scrollBy(1)
        }
        if (this.state.index === 2)
        {
            this.setState({showCover: false})
        }

    }

    render()
    {
        return(
            <View style={{flex:1, backgroundColor: Colors.white,}}>
                {this.renderCover()}

                {this.renderGame()}
            </View>
        );
    }


}

const styles = StyleSheet.create({
    card:{
        height: HEIGHT *0.65,
        width: WIDTH*0.9,
        backgroundColor: Colors.white,
        shadowColor: Colors.yellow,
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 15,
        borderRadius: 20,
        marginVertical: 25,
        borderWidth: 1,
        borderColor: Colors.yellow,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button:{
        shadowColor: Colors.lighPurple,
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 15,
        width: '47%',
        height: 70,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.lighPurple,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white
    },
    cardTutorial:{
        width: WIDTH*0.8,
        height: HEIGHT*0.55,
        backgroundColor: Colors.white,
        borderRadius: 10,
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