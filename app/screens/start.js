import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput, KeyboardAvoidingView, Alert, AsyncStorage,ActivityIndicator} from 'react-native';

export class Start extends React.Component {

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
            <View>
            </View>
        );
    }


}

const styles = StyleSheet.create({

});