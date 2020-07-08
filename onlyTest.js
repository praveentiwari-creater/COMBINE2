import React from 'react';
import { SafeAreaView, Text, Platform, View, StyleSheet, Image,TouchableOpacity } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import axios from 'axios';
class Modal extends React.Component {
    state = {
        isWifiEnabled: false,
        res:''
    };
    componentDidMount() {
        NetInfo.addEventListener(test => {
            this.setState({ isWifiEnabled: test.isWifiEnabled });
            console.log("response of test", test);
        });

       this.PostStatus();
    }

    PostStatus=()=>{
        axios({
            method: 'POST',
            url:this.props.urlPost,
            // headers: {
            //   "Content-Type": "application/json",
            //   "tokenId": token1,
            // },
          })
            .then((response) => {
              console.log("response ", response.data.page);
      this.setState({res:response.data.page})
            });
    }
    // getStatus=()=>{
        
    // }
    // putStatus=()=>{
        
    // }
    // PatchStatus=()=>{
        
    // }
    render() {
        if (this.state.isWifiEnabled) {
            return (
                <View style={styles.view}>                    
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', padding: 15 }}>
                        <TouchableOpacity>
                        <Image source={require('./ICONS/menu_white.png')} style={styles.image} />
                        </TouchableOpacity>

                        <Text style={{ fontSize: 25, color: 'white' }}>{this.state.res}</Text>
                        
                        <TouchableOpacity>
                        <Image source={require('./ICONS/three_dot_white.png')} style={styles.image} />
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        return (
            <View>
                <View>
                    <SafeAreaView style={{
                        backgroundColor: 'red', alignItems: 'center'
                    }} >
                        <Text style={{
                            color: "white",
                            fontSize: Platform.OS === 'android' ? 20 : 20,
                            padding: 10
                        }}>No Internet Connection</Text>
                    </SafeAreaView>
                </View>
            </View>
        );
    }
}
export default Modal;
const styles = StyleSheet.create({
    view: {
        backgroundColor: 'grey',
        height: 60,
    },
    image: {
        width: 30, height: 30
    }
})