import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Read_More_Text extends Component {
    constructor(props){
        super(props);
        this.state={
            numberOL:3
        }
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                <View style={{marginLeft:10,marginTop:50}}>
                <Text numberOfLines={this.state.numberOL} style={{width:350,fontSize:20,textAlign:'center'}}>
                     Science is a way of knowing about the world. At once a process, 
                     a product, and an institution, science enables people to both
                      engage in the construction of new knowledge as well as use 
                      information to achieve desired ends. Access to science—whether
                       using knowledge or creating it—necessitates some level of 
                       familiarity with the enterprise and practice of science:
                        we refer to this as science literacy.
                        Science literacy is desirable not only for individuals, 
                        but also for the health and well- being of communities and 
                        society. More than just basic knowledge of science facts.
                         
                </Text>
                </View>

                <View  style={{marginLeft:10}}>
                {this.state.numberOL==3 ?
                <Text style={{color:'blue',fontSize:18}} onPress={()=>this.setState({numberOL:null})}>show more</Text>
               :
                <Text style={{color:'blue',fontSize:18}} onPress={()=>this.setState({numberOL:3})}>show less</Text>
                }
                </View>
                </View>
        )
    }
}
