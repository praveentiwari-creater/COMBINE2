import React, { Component } from 'react'
import { Text, View ,ScrollView,Dimensions,StyleSheet} from 'react-native'
import Modal from './Modal';

export default class Testing extends Component {
    render() {
        return (
            
            <View style={styles.view}>
                <View style={{flex:1}}>

                <Modal 
                postUrl={"https://tecorbfirst.herokuapp.com/api/signup"}
                postName={'virat1'}
                postEmail={'virat19161.tecorb@gmail.com'}
                postUser_name={'virat91611'}
                postMobile_number={'8787878778'}
                postPassword={'87878787'}

                getUrl={"https://tecorbfirst.herokuapp.com/api/getuserdetail"}

                updatePasswordUrl={"https://tecorbfirst.herokuapp.com/api/updatepassword"}
                oldpassword={'12345678'}
                newpassword={'87878787'}
                />
               
                </View>
                <View style={{flex:4.5,marginLeft:50}}>
                <Text  style={{fontSize:30}}> Testing1 </Text>
                </View>
                <View style={{flex:4.5,marginLeft:50}}>
                <Text style={{fontSize:30}}> Testing2 </Text>
                </View>
                </View>
           
            
        )
    }
}
const styles=StyleSheet.create({
    view:{
    flex:1,
  
    }
})