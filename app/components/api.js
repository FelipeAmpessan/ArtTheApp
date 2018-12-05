// // import { API_URL_TST, API_URL_PRD, API_URL_LOCAL, S3_IMAGE_VIDEO_URL } from 'react-native-dotenv';
// import axios from 'axios';
// import { AsyncStorage } from 'react-native';
// var FormData = require('form-data');
//
// let cities = [];
// let jobTypes = [];
//
// class Api {
//     constructor() {
//       //console.log(API_URL_LOCAL);
//         this.api = axios.create({
//             baseURL: 'https://diana2-api-dev.herokuapp.com/',
//             timeout: 60000,
//         });
//
//         this.api.interceptors.response.use(response => {
//             if (response.data.status)
//             {
//                 if (response.data.data !== undefined) {
//                     return Promise.resolve(response.data.data);
//                 }
//                 else
//                 {
//                     return Promise.resolve(response.data.total);
//                 }
//             }
//             else {
//                 return Promise.reject(response);
//             }
//         }, error => {
//             return Promise.reject(error);
//         });
//     }
//
//     async getToken() {
//       return await AsyncStorage.getItem('appToken');
//     }
//
//     async setTokenInHeader(token) {
//         await AsyncStorage.setItem('appToken', token);
//         this.api.defaults.headers.common['AuthToken'] = token;
//
//       // this.setUserData();
//     }
//
//     login(email,password)
//     {
//         const body = {
//             login:{
//                 user: email,
//                 pass: password
//             }
//         };
//
//         return this.api.post('Auth/', body, {headers: {'Content-Type': 'application/json'}});
//     }
//
//     refreshToken(token)
//     {
//         const body = {
//             refresh:{
//                 token: token,
//             }
//         };
//
//         return this.api.post('Auth/', body, {headers: {'Content-Type': 'application/json'}});
//     }
//
//     async logout(token)
//     {
//         const body = {
//             logout:{
//                 token: token,
//             }
//         };
//
//         await AsyncStorage.removeItem('appToken');
//
//         return this.api.post('Auth/', body, {headers: {'Content-Type': 'application/json'}});
//     }
//
//     getMap()
//     {
//         const body = {
//             map:{
//                 list: true
//             }
//         };
//
//         return this.api.post('Data/', body, {headers: {'Content-Type': 'application/json'}});
//     }
//
//     getLevel(id)
//     {
//         const body = {
//             levels:{
//                 view: {
//                     id: id
//                 }
//             }
//         };
//
//         return this.api.post('Data/', body, {headers: {'Content-Type': 'application/json'}});
//     }
//
//     async sendResponse(level)
//     {
//         let body = JSON.parse(await AsyncStorage.getItem('level' + level));
//
//         let allBody = {
//             levels:{
//                 responses : body.responses
//             }
//         }
//
//         return this.api.post('Data/', allBody, {headers: {'Content-Type': 'application/json'}});
//     }
//
//     async setCacheResponse(level, question, answer, mission)
//     {
//
//         let tempBody = null;
//
//         let body = JSON.parse(await AsyncStorage.getItem('level' + level));
//
//         if (body !== null) {
//
//             if (mission !== '')
//             {
//                 body.responses.mission = mission;
//             }else
//             {
//                 body.responses.answers.push({question: question, answer: answer});
//             }
//
//             await AsyncStorage.setItem('level' + level, JSON.stringify(body));
//         }
//         else
//         {
//              tempBody = {
//                 responses: {
//                     level: level,
//                     mission: mission,
//                     answers: [{
//                         question: question,
//                         answer: answer
//                     }],
//                 }
//             };
//
//             await AsyncStorage.setItem('level' + level, JSON.stringify(tempBody));
//         }
//     }
//
//     async getCacheResponse(level)
//     {
//         return JSON.parse(await AsyncStorage.getItem('level' + level));
//     }
// }
//
// export default (new Api());