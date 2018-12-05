import React from 'react';
import {StyleSheet,View, Text, TouchableOpacity, Image, Dimensions, TextInput, ScrollView} from 'react-native';
import {NavigationActions} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from "../assets/Colors";
import {WIDTH} from "../assets/CommonStyles";
import {RegularText} from "./StyledText";

export class TabBar extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
    });

    constructor(props){
        super(props);
        this.state = {focus: 0, userData: null};
    }

    _switchTab(myScreenName, myScreenIndex)
    {
        this.props.navigation.navigate(myScreenName);
    }

    renderTabIcon(icon, name, myScreenIndex, myScreenName, focusScreen)
    {
        // console.log(this.props.navigation.state.routes[this.props.navigation.state.index].key);

        let isFocus = this.props.navigation.state.index === myScreenIndex;

        return(
            <TouchableOpacity style={styles.tabIcon} onPress={()=> this._switchTab(myScreenName, myScreenIndex)}>
                <View style={{alignItems: 'center', opacity: isFocus ? 1 : 0.6}}>
                    <Icon name={icon} size={22} color={isFocus ? Colors.lighPurple : Colors.blackTransparent6}/>
                    <RegularText style={[styles.tabLabel,{color: isFocus ? Colors.lighPurple : Colors.blackTransparent6}]}>
                        {name}
                    </RegularText>
                </View>
            </TouchableOpacity>
        )

    }


    render()
    {
        return(
            <View style={{height: 0, justifyContent:'flex-end'}}>
                <View style={styles.tabContainer}>
                    {this.renderTabIcon('gamepad', 'JOGOS', 0, 'AppHome', this.state.focus)}
                    {this.renderTabIcon('folder', 'PORTIFOLIO', 1, 'Portfolio', this.state.focus)}
                    {this.renderTabIcon('institution', 'GALERIA', 2, 'Gallery', this.state.focus)}
                    {this.renderTabIcon('user', 'PERFIL', 3, 'Profile', this.state.focus)}
                </View>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    tabContainer: {
        height: 50,
        width: WIDTH,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignSelf: 'center',
        backgroundColor: '#fff',
        paddingTop: 3
    },
    tabIcon:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
    },
    tabLabel:{
        fontSize: 10,
        marginTop: 6,
        textAlign: 'center',
    },
    icon:{
        height: 27,
        resizeMode: 'contain',
        marginBottom: 6
    }
});