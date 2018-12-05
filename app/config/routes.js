import * as Screens from '../screens/index';
import {TabNavigator, StackNavigator} from 'react-navigation';
import React from 'react';
import {TabBar} from "../components/tabBar";

const MainTab = TabNavigator({
    AppHome: {screen : Screens.Home},
    Portfolio: {screen: Screens.Portfolio},
    Gallery: {screen: Screens.Gallery},
    Profile: {screen: Screens.Profile}
},{
    tabBarComponent: TabBar,
    tabBarPosition: 'bottom',
    swipeEnabled: true
});

export const MainRoutes = {
    Tutorial: {screen: Screens.Tutorial},
    Start: {screen: Screens.Start},
    Login: {screen : Screens.Login},
    Home: {screen: MainTab},
    CreateAccount: {screen: Screens.CreateAccount},
    Exposition:{screen: Screens.Exposition},
    Curatorship:{screen: Screens.Curatorship},
    Memory:{screen: Screens.Memory},
    Connect: {screen: Screens.Connect},
    AddArt: {screen: Screens.AddArt},
    ViewArt : {screen: Screens.ViewArt},
    Badges: {screen: Screens.Badges},
    Stats: {screen: Screens.Stats}
}