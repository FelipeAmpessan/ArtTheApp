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
import Colors from "../assets/Colors";
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';
import {CommonStyles, HEIGHT, WIDTH} from "../assets/CommonStyles";
import {BoldText, LightText, RegularText} from "../components/StyledText";
import PinchZoomView from 'react-native-pinch-zoom-view';

const dot = <View style={{backgroundColor:'rgba(0,0,0,0.1)', width: 24, height: 24,borderRadius: 12, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
const activeDot =
    <View style={{backgroundColor:'rgba(0,0,0,0.1)', width: 26, height: 26,borderRadius: 13, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, alignItems: 'center', justifyContent: 'center'}} >
        <View style={{backgroundColor: Colors.yellow, width: 16, height: 16,borderRadius: 10, shadowColor: Colors.yellow, shadowOpacity: 0.8, shadowRadius: 1, elevation: 8, shadowOffset: {width: 0, height: 2}, marginBottom: 3}}/>
    </View>

import Svg,{
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';

export class Connect extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        header: null
    });

    handleButtonRef = (ref) => this.ok = ref;

    pulseButton = () => this.ok.pulse(400).then(()=>this.handlePress());


    constructor(props) {
        super(props);
        this.state = {showCover: true, loading: false, tutorial: [{text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id'},{text: 'nec vehicula ex. Ut viverra, velit vitae tristique porttitor, ante ligula elementum purus, in elementum lectus'},{text: 'nisl nec erat. Sed ipsum sem, cursus nec turpis et, rutrum interdum est. Ut vitae justo venenatis'}], index: 0}
        this.handlePress = this.handlePress.bind(this);
    }

    async componentWillMount()
    {
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

    renderConnectItem()
    {
        return(
            <View style={{height: HEIGHT * 0.3, width: WIDTH * 0.5, margin: 15, alignItems: 'center', justifyContent: 'center'}}>
                <Svg height={'100%'} width={'100%'} viewBox="0 0 100 100" style={{position: 'absolute'}}>
                    <Polyline
                        points="51,0 5,30 5,70 50,100 95,70 95,30 49,0"
                        fill="none"
                        stroke="black"
                        strokeWidth="3"
                    />
                </Svg>
                <BoldText style={{width: '90%', fontSize: 20, color: '#000', textAlign: 'center'}}>
                    Teste
                </BoldText>
            </View>
        )
    }

    renderGame()
    {
        return(
            <View style={CommonStyles.background}>
                <PinchZoomView style={{flex: 1, marginBottom: 50, height: '100%', width: '200%', alignSelf: 'center', flexDirection: 'row', flexWrap: 'wrap'}}>
                    {this.renderConnectItem()}
                    {this.renderConnectItem()}
                    {this.renderConnectItem()}
                    {this.renderConnectItem()}
                    {this.renderConnectItem()}
                    {this.renderConnectItem()}
                    {this.renderConnectItem()}
                    {this.renderConnectItem()}
                    {this.renderConnectItem()}
                    {this.renderConnectItem()}
                    {this.renderConnectItem()}
                    {this.renderConnectItem()}
                    {this.renderConnectItem()}
                    {this.renderConnectItem()}
                    {this.renderConnectItem()}
                    {this.renderConnectItem()}
                    {this.renderConnectItem()}
                    {this.renderConnectItem()}
                    {this.renderConnectItem()}
                    {this.renderConnectItem()}
                    {this.renderConnectItem()}
                    {this.renderConnectItem()}
                    {this.renderConnectItem()}
                    {this.renderConnectItem()}
                    {this.renderConnectItem()}
                    {this.renderConnectItem()}
                    {this.renderConnectItem()}
                    {this.renderConnectItem()}
                    {this.renderConnectItem()}
                    {this.renderConnectItem()}
                </PinchZoomView>
            </View>
        )
    }

    render()
    {
        return(
            <View style={{flex:1, backgroundColor: Colors.white,}}>
                {this.state.showCover ?
                    this.renderCover()
                :
                    this.renderGame()
                }
            </View>
        );
    }


}

const styles = StyleSheet.create({
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
    },


});