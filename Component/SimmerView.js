import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import Shimmer from 'react-native-shimmer';

export default class SimmerView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intensity: 0
        }
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({ intensity: 2 })
        }, 3000);
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ marginTop: 200 }}>
                    <View style={{ marginLeft: 60, flexDirection: 'row', overflow: 'hidden' }}>
                        <Shimmer
                            animating={false}
                            opacity={0.09}
                            animationOpacity={1}
                            intensity={this.state.intensity}
                            visible={false}
                            style={{ width: 100, height: 100 }}>
                            <Image source={require('./ICONS/image1.jpg')} style={{ width: 100, height: 100 }} />
                        </Shimmer>

                        <View style={{ flexDirection: 'column', marginLeft: 40 }}>
                        <Shimmer
                            animating={false}
                            opacity={0.09}
                            animationOpacity={1}
                            intensity={this.state.intensity}
                            visible={false}
                            style={{ width: 200 }}>
                                <Text style={{ fontSize: 20 }}>
                                    Good image1
                             </Text>
                            </Shimmer>

                            <Shimmer
                            animating={false}
                            opacity={0.09}
                            animationOpacity={1}
                            intensity={this.state.intensity}
                            visible={false}
                            style={{ width: 100 }}>
                                <Text style={{ fontSize: 20, marginTop: 20 }}>
                                    Very Nice
                             </Text>
                            </Shimmer>
                        </View>

                    </View>
                </View>
            </View>
        )
    }
}
