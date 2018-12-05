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
import {BoldText, LightText, RegularText} from "../components/StyledText";
import * as Animatable from 'react-native-animatable';
import {MemoryCard} from "../components/memoryCard";
import {NavigationActions} from "react-navigation";
import Swiper from 'react-native-swiper';

const dot = <View style={{backgroundColor:'rgba(0,0,0,0.1)', width: 24, height: 24,borderRadius: 12, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
const activeDot =
    <View style={{backgroundColor:'rgba(0,0,0,0.1)', width: 26, height: 26,borderRadius: 13, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, alignItems: 'center', justifyContent: 'center'}} >
        <View style={{backgroundColor: Colors.yellow, width: 16, height: 16,borderRadius: 10, shadowColor: Colors.yellow, shadowOpacity: 0.8, shadowRadius: 1, elevation: 8, shadowOffset: {width: 0, height: 2}, marginBottom: 3}}/>
    </View>

export class Memory extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        header: null
    });

    handleButtonRef = (ref) => this.ok = ref;

    pulseButton = () => this.ok.pulse(400).then(()=>this.handlePress());

    constructor(props) {
        super(props);
        this.state = {currentCards: [],showCover: true, flipCount: 0, shouldFlipBack: false, loading: false, tutorial: [{text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id'},{text: 'nec vehicula ex. Ut viverra, velit vitae tristique porttitor, ante ligula elementum purus, in elementum lectus'},{text: 'nisl nec erat. Sed ipsum sem, cursus nec turpis et, rutrum interdum est. Ut vitae justo venenatis'}], index: 0 }
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
                                memória
                            </BoldText>

                            <View style={styles.card}>
                                <View style={{width: '80%', height: 250, alignSelf: 'center'}}/>
                                <RegularText style={styles.text}>
                                    {this.state.tutorial[0].text}
                                </RegularText>
                            </View>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <BoldText style={CommonStyles.title}>
                                memória
                            </BoldText>

                            <View style={styles.card}>
                                <View style={{width: '80%', height: 250, alignSelf: 'center'}}/>
                                <RegularText style={styles.text}>
                                    {this.state.tutorial[1].text}
                                </RegularText>
                            </View>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <BoldText style={CommonStyles.title}>
                                memória
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

    onFlip(id)
    {
        if (this.canFlip()) {
            let tempArray = this.state.currentCards;
            tempArray.push(id)

            this.setState({flipCount: this.state.flipCount + 1, currentCards: tempArray}, () => {
                if (this.state.flipCount === 2) {
                    this.setState({shouldFlipBack: true})
                }
            })
        }
    }

    canFlip()
    {
        if (this.state.flipCount < 2)
        {
            return true
        }
        else
        {
            this.setState({shouldFlipBack: true});
            return false
        }
    }

    onFlipBack()
    {
        // if (this.state.currentCards[0] === this.state.currentCards[1])
        // {
        //     Alert.alert('Parabéns','Você acertou!',[{text: 'Ok', onPress: () => {
        //             this.setState({shouldFlipBack: false, flipCount: 0, currentCards: []});
        //     }}])
        // }else
        // {
        //     Alert.alert('Que pena!','Você não acertou!',[{text: 'Ok', onPress: () => {
        //             this.setState({shouldFlipBack: false, flipCount: 0, currentCards: []});
        //         }}])
        // }

        this.setState({shouldFlipBack: false, flipCount: 0});
    }

    renderGame()
    {
        if (!this.state.showCover) {
            return (
                <View style={{flex: 1}}>
                    <View style={{flexDirection: 'row', width: WIDTH*0.9, marginTop: 30, alignItems: 'center', justifyContent: 'center', alignSelf: 'center'}}>
                        <BoldText style={{fontSize: 60, width: WIDTH * 0.7, alignSelf: 'center'}}>
                            memória
                        </BoldText>

                        <TouchableOpacity style={{alignItems: 'flex-end', justifyContent: 'center', width: WIDTH*0.2}} onPress={()=> this.props.navigation.goBack()}>
                            <View style={{width: 30, height: 30, backgroundColor: 'rgba(0,0,0,0.2)', alignItems: 'center', justifyContent: 'center', borderRadius: 25}}>
                                <LightText style={{textAlign: 'center', alignSelf: 'center', fontSize: 20}}>
                                    x
                                </LightText>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <ScrollView style={{flex: 1}}>
                        <View style={{width: '90%', alignSelf: 'center', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', marginBottom: 50, paddingTop: 20}}>
                            <MemoryCard title={'lorem ipsun'} id={1} canFlip={()=>this.canFlip()} onFlip={(id)=>this.onFlip(id)} shouldFlipBack={this.state.shouldFlipBack} onFlipBack={()=>this.onFlipBack()}/>
                            <MemoryCard title={'lorem ipsun'} id={3} canFlip={()=>this.canFlip()} onFlip={(id)=>this.onFlip(id)} shouldFlipBack={this.state.shouldFlipBack} onFlipBack={()=>this.onFlipBack()}/>
                            <MemoryCard title={'lorem ipsun'} id={4} canFlip={()=>this.canFlip()} onFlip={(id)=>this.onFlip(id)} shouldFlipBack={this.state.shouldFlipBack} onFlipBack={()=>this.onFlipBack()}/>
                            <MemoryCard title={'lorem ipsun'} id={2} canFlip={()=>this.canFlip()} onFlip={(id)=>this.onFlip(id)} shouldFlipBack={this.state.shouldFlipBack} onFlipBack={()=>this.onFlipBack()}/>
                            <MemoryCard title={'lorem ipsun'} id={7} canFlip={()=>this.canFlip()} onFlip={(id)=>this.onFlip(id)} shouldFlipBack={this.state.shouldFlipBack} onFlipBack={()=>this.onFlipBack()}/>
                            <MemoryCard title={'lorem ipsun'} id={9} canFlip={()=>this.canFlip()} onFlip={(id)=>this.onFlip(id)} shouldFlipBack={this.state.shouldFlipBack} onFlipBack={()=>this.onFlipBack()}/>
                            <MemoryCard title={'lorem ipsun'} id={5} canFlip={()=>this.canFlip()} onFlip={(id)=>this.onFlip(id)} shouldFlipBack={this.state.shouldFlipBack} onFlipBack={()=>this.onFlipBack()}/>
                            <MemoryCard title={'lorem ipsun'} id={6} canFlip={()=>this.canFlip()} onFlip={(id)=>this.onFlip(id)} shouldFlipBack={this.state.shouldFlipBack} onFlipBack={()=>this.onFlipBack()}/>
                            <MemoryCard title={'lorem ipsun'} id={8} canFlip={()=>this.canFlip()} onFlip={(id)=>this.onFlip(id)} shouldFlipBack={this.state.shouldFlipBack} onFlipBack={()=>this.onFlipBack()}/>
                            <MemoryCard title={'lorem ipsun'} id={3} canFlip={()=>this.canFlip()} onFlip={(id)=>this.onFlip(id)} shouldFlipBack={this.state.shouldFlipBack} onFlipBack={()=>this.onFlipBack()}/>
                            <MemoryCard title={'lorem ipsun'} id={7} canFlip={()=>this.canFlip()} onFlip={(id)=>this.onFlip(id)} shouldFlipBack={this.state.shouldFlipBack} onFlipBack={()=>this.onFlipBack()}/>
                            <MemoryCard title={'lorem ipsun'} id={5} canFlip={()=>this.canFlip()} onFlip={(id)=>this.onFlip(id)} shouldFlipBack={this.state.shouldFlipBack} onFlipBack={()=>this.onFlipBack()}/>
                            <MemoryCard title={'lorem ipsun'} id={6} canFlip={()=>this.canFlip()} onFlip={(id)=>this.onFlip(id)} shouldFlipBack={this.state.shouldFlipBack} onFlipBack={()=>this.onFlipBack()}/>
                            <MemoryCard title={'lorem ipsun'} id={2} canFlip={()=>this.canFlip()} onFlip={(id)=>this.onFlip(id)} shouldFlipBack={this.state.shouldFlipBack} onFlipBack={()=>this.onFlipBack()}/>
                            <MemoryCard title={'lorem ipsun'} id={1} canFlip={()=>this.canFlip()} onFlip={(id)=>this.onFlip(id)} shouldFlipBack={this.state.shouldFlipBack} onFlipBack={()=>this.onFlipBack()}/>
                            <MemoryCard title={'lorem ipsun'} id={4} canFlip={()=>this.canFlip()} onFlip={(id)=>this.onFlip(id)} shouldFlipBack={this.state.shouldFlipBack} onFlipBack={()=>this.onFlipBack()}/>
                            <MemoryCard title={'lorem ipsun'} id={8} canFlip={()=>this.canFlip()} onFlip={(id)=>this.onFlip(id)} shouldFlipBack={this.state.shouldFlipBack} onFlipBack={()=>this.onFlipBack()}/>
                            <MemoryCard title={'lorem ipsun'} id={9} canFlip={()=>this.canFlip()} onFlip={(id)=>this.onFlip(id)} shouldFlipBack={this.state.shouldFlipBack} onFlipBack={()=>this.onFlipBack()}/>
                        </View>
                    </ScrollView>
                </View>
            )
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