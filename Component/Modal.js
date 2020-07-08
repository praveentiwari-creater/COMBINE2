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
            if(test.isWifiEnabled){
                this.PostStatus();
                this.getStatus();
                this.updatePassword();
            }
        });

      
    }

    PostStatus=()=>{
            let data = {
                name: this.props.postName,
                email: this.props.postEmail,
                username: this.props.postUser_name,
                mobile: this.props.postMobile_number,
                password: this.props.postPassword,
            }
            console.log('api data', data)
            axios({
                method: 'POST',
                url:this.props.postUrl,
                headers: {
                    "Content-Type": "application/json"
                },
                data
            }).then((response) => {
                console.log("signup response",response)
                if(response.data.code==200)
                {
                    alert('success')
                }
            }).catch((error) => {
                console.log("!!!!!!!!!!!!!ERROR!!!!!!!!!!!\n")
                console.log(error);
            });            
    }

    getStatus=()=>{
        axios({
            method: 'GET',
            url: this.props.getUrl,
            headers: {
              "Content-Type": "application/json",
              "tokenId":'69a67163fd18ad03e71a01f4bf4e8437',
            },
          })
            .then((response) => {
                console.log("get api tecorb", response);
              console.log("get api tecorb", response.data.Userdetail.name);
              console.log("get api tecorb", response.data.Userdetail.email);
              console.log("get api tecorb", response.data.Userdetail.username);
              console.log("get api tecorb", response);
      
      
            });
    }

    updatePassword=()=>{
        let data = {
            password: this.props.oldpassword,
            newpassword: this.props.newpassword
        }
        axios({
            method: 'POST',
            url:this.props.updatePasswordUrl,
            headers: {
                "Content-Type": "application/json",
                "tokenId":'69a67163fd18ad03e71a01f4bf4e8437',
            },
            data
        }).then((response) => {
            console.log("update password response",response)
            if(response.data.code==200)
            {
                alert(" password update successfull");
            }

        }).catch((error) => {
            console.log("!!!!!!!!!!!!!ERROR!!!!!!!!!!!\n")
            console.log(error);
        });
     }

    render() {
        if (this.state.isWifiEnabled) {
            return (
                <View style={styles.view}>                    
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', padding: 15 }}>
                        <TouchableOpacity>
                        <Image source={require('./ICONS/menu_white.png')} style={styles.image} />
                        </TouchableOpacity>

                        <Text style={{ fontSize: 25, color: 'white' }}>HEADER</Text>
                        
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