import React, { Component } from 'react'
import { Text, View,Image,TouchableOpacity } from 'react-native'

export default class HomePage extends Component {
    render() {
        return (
            <View>
                 <View style={{flex:1,marginLeft:10,marginTop:5}}>
             <TouchableOpacity style={{width:50,height:50}} onPress={()=>this.props.navigation.openDrawer()} >
                 <Image source={require('./ICONS/menu.png')} style={{width:50,height:50}}/>
             </TouchableOpacity>
             <Text style={{marginTop:200,fontSize:30,fontWeight:'bold'}}>Hello This is Home Page</Text>
            </View>
            </View>
        )
    }
}
