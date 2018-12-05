import React from 'react';
import {StackNavigator} from 'react-navigation';
import {MainRoutes} from './app/config/';
import {AsyncStorage,View, StatusBar} from "react-native";
import CardStackStyleInterpolator from "react-navigation/src/views/CardStack/CardStackStyleInterpolator";

const TCC = StackNavigator({
    ...MainRoutes
}, {
    // transitionConfig: () => {
    //     return {screenInterpolator: CardStackStyleInterpolator.forFade}
    // },
    initialRouteName:'Home'
});


export default class App extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    async componentWillMount()
    {
    }

    render() {
        return (
            <View style={{flex:1}}>
                {<TCC/>}
            </View>
        );
    }
}
