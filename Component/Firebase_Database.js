
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native'
import database from '@react-native-firebase/database';
export default class Firebase_Database extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: '',
            same: []
        }
    }
    store = () => {
        const data = database()
            .ref('users/team').push().set({ name: this.state.test })
        // console.log("datatata",data.key)
    }
        componentDidMount = () => {

            const data1 = database().ref('users/team')
    // //         .set({
    // // group:'demo'
    // //         })
    //         // .set({
    //         //     name: 'Ada Lovelace',
    //         //     age: 35,
    //         //   })
                .on('value', snapshot => {
                    this.setState({same:Object.values(snapshot.val())})
                    console.log('User data: ', Object.values(snapshot.val()));
                });
    //         // console.log("datatata",data1.key)
        }

        list = () => {
            return this.state.same.map(element => {
              return (
                <View style={{ margin: 10 }}>
                  <Text>{element.name}</Text>
                
                </View>
              );
            });
          };

    render() {
        return (
            <View>
                <View>
                    <TextInput style={{ borderWidth: 2, }}
                        onChangeText={(test) => this.setState({ test: test })}
                    />
                </View>
                <View >
                    <TouchableOpacity onPress={() => this.store()} style={{ marginTop: 50, backgroundColor: 'green' }}>
                        <Text style={{ fontSize: 25, color: 'blue', textAlign: 'center' }}> Firebase_Database </Text>
                    </TouchableOpacity>
                </View>
                <View>
                <View>{this.list()}</View>
              
                    {/* <FlatList
                        data={this.state.same}
                        renderItem={({ item }) => (
                            <View>
                                <Text>
                                    {item.name}
                                </Text>
                            </View>
                        )}
                    /> */}
                </View>
            </View>
        )
    }
}
