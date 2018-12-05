import {StyleSheet, Dimensions} from "react-native";
import Colors from "./Colors";

export const HEIGHT = Dimensions.get('window').height;
export const WIDTH = Dimensions.get('window').width;

export const CommonStyles = StyleSheet.create({
    background: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center',
        backgroundColor: Colors.white
        // justifyContent: 'center'
    },
    largeYellowButton:{
        width: WIDTH*0.8,
        height: 55,
        backgroundColor: Colors.yellow,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        shadowColor: '#fff',
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 8,
        shadowOffset: {width: 0, height: 1}
    },
    largeGreenButtonTransparent:{
        width: WIDTH*0.8,
        height: 75,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    largeButtonLabel:{
        fontSize: 28,
        color: Colors.darkPurple,
        letterSpacing: 2,
    },
    title: {
        fontSize: 36,
        letterSpacing: 2,
        color: Colors.white,
        textAlign: 'left',
        width: WIDTH*0.8
    },
    missionText:{
        fontSize: 22,
        color: '#000',
        width: WIDTH*0.8,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 15
    },
    loadingBox:{
        width: 100,
        height: 100,
        backgroundColor: Colors.blackTransparent4,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: (WIDTH / 2) - 50,
        top: (HEIGHT / 2) - 50
    },
    label:{
        width: WIDTH*0.9,
        marginTop: 10,
        fontSize: 16,
        color: Colors.white
    },
    textInput:{
        width: WIDTH*0.9,
        marginVertical: 5,
        fontSize: 20,
        color: Colors.white,
        fontFamily: 'modernica-light'
    }
});

