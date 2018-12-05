import React from 'react';
import {StyleSheet,View, Text, TouchableOpacity, Image, Platform, TextInput, KeyboardAvoidingView, Alert, AsyncStorage,ActivityIndicator} from 'react-native';
import Colors from "../assets/Colors";
import {NavigationActions} from 'react-navigation'
import {CommonStyles, HEIGHT, WIDTH} from "../assets/CommonStyles";
import LinearGradient from 'react-native-linear-gradient';
import {BoldText, RegularText} from "../components/StyledText";
import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';

const dot = <View style={{backgroundColor:'rgba(0,0,0,0.1)', width: 24, height: 24,borderRadius: 12, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
const activeDot =
    <View style={{backgroundColor:'rgba(0,0,0,0.1)', width: 26, height: 26,borderRadius: 13, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, alignItems: 'center', justifyContent: 'center'}} >
        <View style={{backgroundColor:'#fff', width: 16, height: 16,borderRadius: 10, shadowColor: '#fff', shadowOpacity: 0.8, shadowRadius: 1, elevation: 8, shadowOffset: {width: 0, height: 2}, marginBottom: 3}}/>
    </View>


export class Tutorial extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        header: null
    });

    handleButtonRef = (ref) => this.ok = ref;

    pulseButton = () => this.ok.pulse(400).then(()=>this.handlePress());

    constructor(props) {
        super(props);
        this.state={loading: false, tutorial: [{text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id'},{text: 'nec vehicula ex. Ut viverra, velit vitae tristique porttitor, ante ligula elementum purus, in elementum lectus'},{text: 'nisl nec erat. Sed ipsum sem, cursus nec turpis et, rutrum interdum est. Ut vitae justo venenatis'}], index: 0 };

        this.handlePress = this.handlePress.bind(this);
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
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({routeName: 'Login'})],
            });
            this.props.navigation.dispatch(resetAction);
        }

    }

    render()
    {
        return(
            <View style={{flex: 1}}>
                <LinearGradient colors={['#cf59e1', '#793b87']} style={{flex:1,}}>
                    <Swiper paginationStyle={{bottom: Platform.OS === 'ios' ? 5 : 0}} loop={false} dot={dot} activeDot={activeDot} onIndexChanged={(index)=>this.setState({index})} bounces ref={(swiper) => this.mySwiper = swiper}>
                        <View style={{marginTop: Platform.OS === 'ios' ? 50 : 30, alignItems: 'center'}}>
                            <BoldText style={CommonStyles.title}>
                                TUTORIAL 01
                            </BoldText>

                            <View style={styles.card}>
                                <View style={{width: '80%', height: 250, alignSelf: 'center'}}/>
                                <RegularText style={styles.text}>
                                    {this.state.tutorial[0].text}
                                </RegularText>
                            </View>
                        </View>
                        <View style={{marginTop: Platform.OS === 'ios' ? 50 : 30, alignItems: 'center'}}>
                            <BoldText style={CommonStyles.title}>
                                TUTORIAL 2
                            </BoldText>

                            <View style={styles.card}>
                                <View style={{width: '80%', height: 250, alignSelf: 'center'}}/>
                                <RegularText style={styles.text}>
                                    {this.state.tutorial[1].text}
                                </RegularText>
                            </View>
                        </View>
                        <View style={{marginTop: Platform.OS === 'ios' ? 50 : 30, alignItems: 'center'}}>
                            <BoldText style={CommonStyles.title}>
                                TUTORIAL 3
                            </BoldText>

                            <View style={styles.card}>
                                <View style={{width: '80%', height: 250, alignSelf: 'center'}}/>
                                <RegularText style={styles.text}>
                                    {this.state.tutorial[2].text}
                                </RegularText>
                            </View>
                        </View>
                    </Swiper>

                    <TouchableOpacity onPress={this.pulseButton}>
                        <Animatable.View ref={this.handleButtonRef} iterationCount={1} direction='normal' easing={'ease'} style={[CommonStyles.largeYellowButton,{height: 60, alignSelf: 'center', marginBottom: 30}]}>
                            <RegularText style={CommonStyles.largeButtonLabel}>
                                {this.state.index !== 2 ? 'Próximo' : 'Começar'}
                            </RegularText>
                        </Animatable.View>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
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