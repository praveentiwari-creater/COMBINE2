import React, { Component } from 'react'
import { Text, View, Image, FlatList } from 'react-native'
import Header from './Header';
function SubCategory({ route, navigation }) {
    const { item } = route.params;

    // class SubCategory extends Component{


    // constructor(props){
    //     super(props);
    //     this.state={
    //         data:null
    //     }
    //     const { navigation } = this.props;
    //     const item=navigation.getParams('item')
    // }
    // // componentDidMount=({route,navigation})=>{
    // //     const {item}=route.params;
    // //     this.setState({data:item})
    // // }
    // render(){
    // const { navigate } = this.props.navigation;

    return (
        <View>
              <Header title="Sub Categories" textColor={'white'}
              onPressLeft={()=>navigation.goBack()}
                        imageLeft={require('./ICONS/white_left_arrow.png')}
                       
                    />
<Text style={{fontSize:30,textAlign:'center'}}>{item.data1.text}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}> 
        {/* <FlatList
        data={item.data2}
        numColumns={3}
        renderItem={({item})=>
            <View> */}

            <Image source={item.data2.image1} style={{ width: 100, height: 100, margin: 10 }} />
            <Image source={item.data2.image2} style={{ width: 100, height: 100, margin: 10 }} />
            <Image source={item.data2.image3} style={{ width: 100, height: 100, margin: 10 }} />
           
        {/* // }
        // />       */}
          
        </View>
        </View>
    )
}
// }
export default SubCategory;
