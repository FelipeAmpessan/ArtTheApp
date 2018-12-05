import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, KeyboardAvoidingView, Alert, AsyncStorage,ActivityIndicator} from 'react-native';
import Colors from "../assets/Colors";
import {WIDTH} from "../assets/CommonStyles";
import {BoldText} from "../components/StyledText";
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';

export class CreatePortfolioItemCard extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        header: null
    });

    handleButtonRef = (ref) => this.ok = ref;

    pulseButton = () => this.ok.pulse(400).then(()=>this.props.navigation.navigate('AddArt'));

    constructor(props) {
        super(props);
    }

    async componentWillMount()
    {
    }

    render()
    {
        return(
            <TouchableOpacity style={{marginTop: 30}} onPress={this.pulseButton} activeOpacity={0.9}>
                <Animatable.View ref={this.handleButtonRef} iterationCount={1} direction='normal' easing={'ease'} style={[styles.card,{marginTop: 0}]}>
                    <View style={{flex:1, borderRadius: 20, alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 30, flexDirection: 'row'}}>
                        <BoldText style={{fontSize: 25, color: Colors.darkPurple, letterSpacing: 1.5}}>
                            {this.props.title}
                        </BoldText>
                        <Icon name={'plus'} size={25} color={Colors.darkPurple}/>
                    </View>
                </Animatable.View>
            </TouchableOpacity>
        );
    }


}

const styles = StyleSheet.create({
    card:{
        height: 100,
        width: WIDTH*0.9,
        backgroundColor: Colors.white,
        shadowColor: Colors.lighPurple,
        shadowOpacity: 0.5,
        shadowRadius: 15,
        elevation: 15,
        borderRadius: 20,
        marginTop: 35,
        borderWidth: 2,
        borderColor: Colors.lighPurple
    }
});