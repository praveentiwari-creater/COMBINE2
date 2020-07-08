
import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

export default class Drop_Down_List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testing: [
                'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
                'Haryana', 'Himachal Pradesh', 'Jammu & Kashmir', 'Jharkhand', 'Karnataka', 'Kerala',
                'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa',
                'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
                'Uttarakhand', 'West Bengal',
            ],
            show: false,
            STATE: ''
        }
    }

    search = (item) => {
        this.setState({ STATE: item })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: 'blue', borderRadius: 20, marginTop: 10 }} >
                    <TextInput style={{ width:"75%", fontSize: 25, textAlign: 'center' }}
                        value={this.state.STATE}
                        placeholder='Your State........'
                    />
                    <TouchableOpacity style={{ width: 60, height: 30, marginLeft: 10, marginTop: 10 }}
                        onPress={() => this.setState({ show: !this.state.show, STATE: '' })}>
                        <Text style={{ fontSize: 25, textAlign: 'center', color: 'blue', fontWeight: 'bold' }}>State</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    {this.state.show == true ?
                        <FlatList
                            data={this.state.testing}
                            extraData={this.state}
                            renderItem={({ item, index }) => (
                                <View style={styles.item}>
                                    <TouchableOpacity onPress={() =>{this.search(item),this.setState({show:false})}}>
                                        <Text style={styles.title}>{item}</Text>
                                    </TouchableOpacity>

                                </View>
                            )}
                        />
                        :
                        null
                    }
                </View>
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
        height: 30
    },
    title: {
        fontSize: 20,
        color: 'black'
    },
});
