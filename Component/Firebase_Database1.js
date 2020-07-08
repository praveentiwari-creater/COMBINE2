import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import firestore, { firebase } from '@react-native-firebase/firestore';
export default class Firebase_Database extends Component {
    constructor(props){
        super(props);
        this.state={
            name:''
        }
        // this.store();
    }
    store = async() => {

        const users = await firestore()
  .collection('Users/1')
//   .doc('1')
  .get();
  console.log('uuuuuu',users)

        // firestore()
        // .collection('Users')
        // .doc('1')
        // .update({name:'service'}).then(()=>{
        //     alert('added')
        // })

        // firestore().collection('Users').doc('qgTyRtTTlORqjflpHamz').delete()

        // const user = await firestore().collection('Users').doc('Y9SDD7V1HHhtqJzt9Qtz').onSnapshot(doc=>{
        //     this.setState({name:doc.data().name})
        // })
    //    console.log('userss',user)
    }
    // componentDidMount=()=>{
    //     firestore().collection('Users').get().then(querySnampe=>{
    //         console.log("total size",querySnampe.size)
    //         querySnampe.forEach(praveen=>{
    //             console.log('total idddd',praveen.exists)
               
    //             // console.log('total idddd22222222',praveen.data())
    //         })
    //     })
    // }
    // componentDidMount = () => {
    //     const data1 = database().ref('users/team')
    //         .on('value', snapshot => {
    //             console.log('User data: ', snapshot.val());
    //         });
    //     // console.log("datatata",data1.key)
    // }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.store()} style={{ marginTop: 200 }}>
                    <Text style={{ fontSize: 25, color: 'blue' }}> Firebase_Database </Text>
                </TouchableOpacity>
        <Text>NAME: {this.state.name}</Text>
            </View>
        )
    }
}