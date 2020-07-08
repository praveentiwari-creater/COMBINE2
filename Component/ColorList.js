import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet,TouchableOpacity,TextInput } from 'react-native'

export default class ColorList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testing: 

               [
                { text: "First Color" }, { text: "Second Color" },
                { text: "Third Color" }, { text: "Fourth Color" },
                { text: "Fifth Color" },{ text: "Sixth Color" },
                { text: "Seventh Color"},{ text: "Eighth Color" }, 
                { text: "Ninth Color" },{ text: "Tenth Color" },
                ],
                //    { text: "First Color",color:'#66ccff'}, {text: "Second Color",color:'#994d00'},
                //    { text: "Third Color",color:'#006600'}, {text: "Fourth Color",color:'#ff6666'},
                //     {text: "Fifth Color",color:'#88ff4d'},
                //     {text: "Sixth Color",color:'#c653c6'}, {text: "Seventh Color",color:'#75a3a3'},
                //      {text: "Eighth Color",color:'#ffff66'}, {text: "Ninth Color",color:'#ff66ff'},
                //      { text: "Tenth Color",color:'#a6a6a6'},
                //                 color1:{
            //    color1: [
            //     { color2: '#66ccff' }, { color2: '#994d00' }, { color2: '#006600' }, { color2: '#ff6666' }, { color2: '#88ff4d' },
            //     { color2: '#c653c6' }, { color2: '#75a3a3' }, { color2: '#ffff66' }, { color2: '#ff66ff' }, { color2: '#a6a6a6' },
            //     ]
                //                 }
                //             }
                color1: [
                        '#66ccff','#994d00','#006600','#ff6666','#88ff4d',
                        '#c653c6','#75a3a3','#ffff66','#ff66ff','#a6a6a6'
                    ],

              
            
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.testing}
                    extraData={this.state}
                    renderItem={({ item, index }) => (
                        <View style={[styles.item, { backgroundColor: this.state.color1[index] }]}>
                        
                            <Text style={styles.title}>{item.text}</Text>
                         
                    
                        </View>
                    )}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 2,
    },
    item: {

        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 18,
    },
});
