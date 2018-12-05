import React from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView, Image, TextInput, KeyboardAvoidingView, Alert, AsyncStorage,ActivityIndicator} from 'react-native';
import {CommonStyles, WIDTH} from "../assets/CommonStyles";
import {BlackText, BoldText, LightText} from "../components/StyledText";
import Colors from "../assets/Colors";

export class AddArt extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        header: null
    });

    constructor(props) {
        super(props);
        this.state={loading: false, artist: '', title: '', technique: '', dimensions: '',date: '', hasPicture: false};

        this.inputs = {};
    }

    async componentWillMount()
    {
    }

    focusNextField(id) {
        this.inputs[id].focus();
    }

    renderPhotos()
    {
        if (this.state.hasPicture)
        {
            return(
                <TouchableOpacity style={styles.photoContainer}>

                </TouchableOpacity>
            )
        }
    }

    render()
    {
        return(
            <KeyboardAvoidingView behavior={'padding'} style={CommonStyles.background}>

                <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', width: WIDTH *0.2, marginTop: 30}} onPress={()=> this.props.navigation.goBack()}>
                    <View style={{width: 30, height: 30, borderRadius: 25, backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: 'center', alignItems: 'center'}}>
                        <BlackText style={{fontSize: 20, color: Colors.white}}>
                            x
                        </BlackText>
                    </View>
                </TouchableOpacity>


                <BoldText style={{fontSize: 46, width: WIDTH, alignSelf: 'center', textAlign: 'center'}}>
                    adicionar obra
                </BoldText>

                <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                    <View style={{marginBottom: 50}}>
                        <View style={{justifyContent: 'flex-start', alignItems: 'center', marginVertical: 25, marginTop: 25}}>
                            <BlackText style={[CommonStyles.label,{color: Colors.yellow, fontSize: 30}]}>
                                nome do artista
                            </BlackText>
                            <TextInput style={[CommonStyles.textInput,{color: Colors.lighPurple, fontFamily: 'modernica-regular', fontSize: 22}]} placeholder={'Digite o nome do artista'}
                                       placeholderTextColor={Colors.lighPurple}
                                       underlineColorAndroid="transparent"
                                       onChangeText={artist => this.setState({artist})} value={this.state.artist}
                                       returnKeyType={'next'} onSubmitEditing={() => { this.focusNextField('title'); }}
                                       maxLength={150} ref={ input => { this.inputs['artist'] = input; }}/>
                            <View style={{width: WIDTH * 0.9, height: 1, backgroundColor: Colors.lighPurple}}/>
                        </View>

                        <View style={{justifyContent: 'flex-start', alignItems: 'center'}}>
                            <BlackText style={[CommonStyles.label,{color: Colors.yellow, fontSize: 30}]}>
                                título da obra
                            </BlackText>
                            <TextInput style={[CommonStyles.textInput,{color: Colors.lighPurple, fontFamily: 'modernica-regular', fontSize: 22}]} placeholder={'Digite o título da obra'}
                                       placeholderTextColor={Colors.lighPurple}
                                       underlineColorAndroid="transparent"
                                       onChangeText={title => this.setState({title})} value={this.state.title}
                                       returnKeyType={'next'} onSubmitEditing={() => { this.focusNextField('technique'); }}
                                       maxLength={150} ref={ input => { this.inputs['title'] = input; }}/>
                            <View style={{width: WIDTH * 0.9, height: 1, backgroundColor: Colors.lighPurple}}/>
                        </View>

                        <View style={{justifyContent: 'flex-start', alignItems: 'center', marginVertical: 25}}>
                            <BlackText style={[CommonStyles.label,{color: Colors.yellow, fontSize: 30}]}>
                                técnica
                            </BlackText>
                            <TextInput style={[CommonStyles.textInput,{color: Colors.lighPurple, fontFamily: 'modernica-regular', fontSize: 22}]} placeholder={'Digite a técnica da obra'}
                                       placeholderTextColor={Colors.lighPurple}
                                       underlineColorAndroid="transparent"
                                       onChangeText={technique => this.setState({technique})} value={this.state.technique}
                                       returnKeyType={'next'} onSubmitEditing={() => { this.focusNextField('dimensions'); }}
                                       maxLength={150} ref={ input => { this.inputs['technique'] = input; }}/>
                            <View style={{width: WIDTH * 0.9, height: 1, backgroundColor: Colors.lighPurple}}/>
                        </View>

                        <View style={{justifyContent: 'flex-start', alignItems: 'center'}}>
                            <BlackText style={[CommonStyles.label,{color: Colors.yellow, fontSize: 30}]}>
                                dimensões
                            </BlackText>
                            <TextInput style={[CommonStyles.textInput,{color: Colors.lighPurple, fontFamily: 'modernica-regular', fontSize: 22}]} placeholder={'Digite as dimensões da obra'}
                                       placeholderTextColor={Colors.lighPurple}
                                       underlineColorAndroid="transparent"
                                       onChangeText={dimensions => this.setState({dimensions})} value={this.state.dimensions}
                                       returnKeyType={'next'} onSubmitEditing={() => { this.focusNextField('date'); }}
                                       maxLength={150} ref={ input => { this.inputs['dimensions'] = input; }}/>
                            <View style={{width: WIDTH * 0.9, height: 1, backgroundColor: Colors.lighPurple}}/>
                        </View>

                        <View style={{justifyContent: 'flex-start', alignItems: 'center', marginVertical: 25}}>
                            <BlackText style={[CommonStyles.label,{color: Colors.yellow, fontSize: 30}]}>
                                data
                            </BlackText>
                            <TextInput style={[CommonStyles.textInput,{color: Colors.lighPurple, fontFamily: 'modernica-regular', fontSize: 22}]} placeholder={'Data da obra'}
                                       placeholderTextColor={Colors.lighPurple}
                                       underlineColorAndroid="transparent"
                                       onChangeText={date => this.setState({date})} value={this.state.date}
                                       returnKeyType={'next'} onSubmitEditing={() => {}}
                                       maxLength={150} ref={ input => { this.inputs['date'] = input; }}/>
                            <View style={{width: WIDTH * 0.9, height: 1, backgroundColor: Colors.lighPurple}}/>
                        </View>

                        <TouchableOpacity style={styles.card} onPress={()=>this.setState({hasPicture: true})}>
                            <BlackText style={{fontSize: 28, color: Colors.lighPurple}}>
                                adicionar foto da obra
                            </BlackText>
                        </TouchableOpacity>

                        {this.renderPhotos()}

                        <TouchableOpacity style={[styles.card,{backgroundColor: Colors.lighPurple, shadowOpacity: 0, borderColor: Colors.white}]} onPress={()=>this.props.navigation.goBack()}>
                            <BoldText style={{fontSize: 28, color: Colors.white}}>
                                SALVAR
                            </BoldText>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }


}

const styles = StyleSheet.create({
    card:{
        height: 80,
        width: WIDTH*0.9,
        shadowColor: Colors.darkPurple,
        shadowOpacity: 0.6,
        shadowRadius: 10,
        elevation: 15,
        borderRadius: 20,
        marginTop: 35,
        borderWidth: 2,
        borderColor: Colors.darkPurple,
        alignItems: 'center',
        justifyContent: 'center'
    },
    photoContainer:{
        height: 390,
        width: WIDTH*0.9,
        backgroundColor: Colors.white,
        borderRadius: 20,
        marginTop: 35,
        borderWidth: 2,
        borderColor: Colors.yellow,
        alignItems: 'center',
        justifyContent: 'center'
    }
});