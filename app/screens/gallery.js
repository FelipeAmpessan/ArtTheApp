import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, KeyboardAvoidingView, Alert, AsyncStorage,ActivityIndicator} from 'react-native';
import Colors from "../assets/Colors";
import {WIDTH} from "../assets/CommonStyles";
import {BoldText} from "../components/StyledText";
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {HomeCard} from "../components/homeCard";
import {GalleryItemCard} from "../components/galleryItemCard";

export class Gallery extends React.Component {

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

                <BoldText style={{marginTop: 30, fontSize: 60, width: WIDTH *0.9, alignSelf: 'center'}}>
                    galeria
                </BoldText>

                <ScrollView style={{flex:1, backgroundColor: Colors.white}}>
                    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, marginBottom: 120}}>
                        <GalleryItemCard title={'Lorem Obra 01'} navigation={this.props.navigation}/>
                        <GalleryItemCard title={'Lorem Obra 02'} navigation={this.props.navigation}/>
                        <GalleryItemCard title={'Lorem Obra 03'} navigation={this.props.navigation}/>
                        <GalleryItemCard title={'Lorem Obra 04'} navigation={this.props.navigation}/>
                        <GalleryItemCard title={'Lorem Obra 05'} navigation={this.props.navigation}/>
                    </View>
                </ScrollView>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    card:{
        height: 160,
        width: WIDTH*0.9,
        backgroundColor: Colors.white,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 15,
        elevation: 15,
        borderRadius: 20,
        marginTop: 35
    }
});