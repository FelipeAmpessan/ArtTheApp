import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, KeyboardAvoidingView, Alert, AsyncStorage,ActivityIndicator} from 'react-native';
import Colors from "../assets/Colors";
import {HEIGHT, WIDTH} from "../assets/CommonStyles";
import {BoldText, LightText} from "../components/StyledText";
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';

export class Profile extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        header: null
    });


    constructor(props) {
        super(props);
    }

    async componentWillMount()
    {
    }

    render()
    {
        return(
            <View style={{flex:1, backgroundColor: Colors.white,}}>

                <View style={{marginTop: 30, width: WIDTH *0.9, alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <BoldText style={{fontSize: 25, color: '#000'}}>
                            10
                        </BoldText>
                        <LightText style={{fontSize: 20, color: '#000'}}>
                            nível
                        </LightText>
                    </View>

                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <BoldText style={{fontSize: 25, color: '#000'}}>
                            1000
                        </BoldText>
                        <LightText style={{fontSize: 20, color: '#000'}}>
                            moedas
                        </LightText>
                    </View>
                </View>

                <LightText style={{marginTop: 30, fontSize: 30, width: WIDTH *0.9, alignSelf: 'center', textAlign: 'center', color: '#000'}}>
                    Felipe Boff Ampessan
                </LightText>

                <View style={{height: HEIGHT*0.7, marginTop: 50, marginRight: 20}}>
                    {/*HEAD*/}

                    <Image source={require('../assets/images/characters/Skin/Tint7/tint7_neck.png')} style={styles.neck}/>
                    <Image source={require('../assets/images/characters/Skin/Tint7/tint7_head.png')} style={styles.head}/>

                    {/*HAIR*/}
                    <Image source={require('../assets/images/characters/Hair/Black/blackMan3.png')} style={styles.hair}/>

                    {/*FACE*/}
                    <Image source={require('../assets/images/characters/Face/Completes/face4.png')} style={styles.face}/>

                    {/*SHIRT*/}
                    <TouchableOpacity style={styles.shirt}>
                        <Image source={require('../assets/images/characters/Shirts/Navy/navyShirt3.png')} style={[styles.shirt,{height: '100%',width: '100%', top: 0}]}/>
                    </TouchableOpacity>

                    {/*HAND*/}
                    <Image source={require('../assets/images/characters/Skin/Tint7/tint7_hand.png')} style={styles.leftHand}/>
                    <Image source={require('../assets/images/characters/Skin/Tint7/tint7_hand.png')} style={styles.rightHand}/>

                    {/*ARM*/}
                    <TouchableOpacity style={styles.leftArm}>
                        <Image source={require('../assets/images/characters/Shirts/Navy/navyArm_long.png')} style={[styles.leftArm,{transform:[{ scaleX: -1 }], height: '100%',width: '100%',top: 0, left: 0}]}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.rightArm}>
                        <Image source={require('../assets/images/characters/Shirts/Navy/navyArm_long.png')} style={[styles.rightArm,{height: '100%',width: '100%',top: 0, right: 0}]}/>
                    </TouchableOpacity>

                    {/*SHOES*/}
                    <TouchableOpacity style={styles.rightShoe}>
                        <Image source={require('../assets/images/characters/Shoes/Black/blackShoe2.png')} style={[styles.rightShoe,{height: '100%',width: '100%',bottom: 0, right: 0}]}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.leftShoe}>
                        <Image source={require('../assets/images/characters/Shoes/Black/blackShoe2.png')} style={[styles.leftShoe,{height: '100%',width: '100%',bottom: 0, left: 0, transform:[{ scaleX: -1 }]}]}/>
                    </TouchableOpacity>

                    {/*PANTS*/}
                    <TouchableOpacity style={styles.rightPants}>
                        <Image source={require('../assets/images/characters/Pants/Brown/pantsBrown_long.png')} style={[styles.rightPants,{height: '100%',width: '100%',bottom: 0, right: 0}]}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.leftPants}>
                        <Image source={require('../assets/images/characters/Pants/Brown/pantsBrown_long.png')} style={[styles.leftPants,{height: '100%',width: '100%',bottom: 0, left: 0, transform:[{ scaleX: -1 }]}]}/>
                    </TouchableOpacity>

                    <Image source={require('../assets/images/characters/Pants/Brown/pantsBrown3.png')} style={styles.belt}/>


                    <TouchableOpacity style={styles.pet}>
                        <Image source={require('../assets/images/pets/Square/narwhal.png')} style={[styles.pet,{height: '100%',width: '100%', bottom: 0, right: 0}]}/>
                    </TouchableOpacity>
                </View>

                <View style={{position: 'absolute', width: '95%', height: 100, top: '25%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10, alignSelf: 'center'}}>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity style={styles.roundButton} onPress={(()=> this.props.navigation.navigate('Badges'))}>
                            <Icon name={'trophy'} size={25} color={Colors.yellow}/>
                        </TouchableOpacity>
                        <LightText style={{marginTop: 5, fontSize: 16, color:  Colors.darkPurple}}>
                            Insígneas
                        </LightText>
                    </View>

                    <View style={{alignItems: 'center',justifyContent: 'center'}}>
                        <TouchableOpacity style={styles.roundButton} onPress={(()=> this.props.navigation.navigate('Stats'))}>
                            <Icon name={'bar-chart'} size={25} color={Colors.yellow}/>
                        </TouchableOpacity>
                        <LightText style={{marginTop: 5, fontSize: 16, color:  Colors.darkPurple}}>
                            Estatísticas
                        </LightText>
                    </View>
                </View>

            </View>
        );
    }


}

const styles = StyleSheet.create({
    head:{
        height: '25%', width: '100%', resizeMode: 'contain', position: 'absolute', top: 0,
    },
    neck:{
        height: '6%', width: '100%', resizeMode: 'contain', position: 'absolute', top: 109,
    },
    hair:{
        height: '18%', width: '100%', resizeMode: 'contain', position: 'absolute', top: -10,
    },
    face:{
        height: '12%', width: '100%', resizeMode: 'contain', position: 'absolute', top: 35,
    },
    leftHand:{
        height: '7.5%', width: '23%', resizeMode: 'contain', position: 'absolute', top: 165, left: '9%', transform:[{ scaleX: -1 }]
    },
    rightHand:{
        height: '7.5%', width: '23%', resizeMode: 'contain', position: 'absolute', top: 165, right: '9%'
    },
    rightArm:{
        height: '30%', width: '23%', resizeMode: 'contain', position: 'absolute', top: 80, right: '19%'
    },
    leftArm:{
        height: '30%', width: '23%', resizeMode: 'contain', position: 'absolute', top: 80, left: '19%'
    },
    belt:{
        height: '6.6%', width: '100%', resizeMode: 'contain', position: 'absolute', bottom: '48%'
    },
    rightPants:{
        height: '22%', width: '30%', resizeMode: 'contain', position: 'absolute', bottom: 137, right: '26%'
    },
    leftPants:{
        height: '22%', width: '30%', resizeMode: 'contain', position: 'absolute', bottom: 137, left: '26%'
    },
    rightShoe:{
        height: '7.5%', width: '23%', resizeMode: 'contain', position: 'absolute', bottom: 110, right: '22%'
    },
    leftShoe:{
        height: '7.5%', width: '23%', resizeMode: 'contain', position: 'absolute', bottom: 110, left: '22%'
    },
    shirt:{
        height: '25%', width: '100%', resizeMode: 'contain', position: 'absolute', top: 115
    },
    pet:{
        height: '24%', width: '30%', resizeMode: 'contain', position: 'absolute', bottom: 100, right: 30,
    },
    roundButton:{
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 15,
        width: 60,
        height: 60,
        backgroundColor: Colors.white,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    }
});