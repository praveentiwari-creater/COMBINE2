
import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions, SafeAreaView, TouchableOpacity, Image
} from 'react-native'
import Header from './Header';
const WIDTH = Dimensions.get('window').width;
export default class GridViewCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // numColumns: 3,
            data: [
                {
                    data1: { id: 0, isShow: false, image: require('./ICONS/fashion.jpg'), text: "Fashion" }
                    , data2: {image1: require('./ICONS/fashion1.png'),image2: require('./ICONS/fashion2.png'),
                    image3: require('./ICONS/fashion3.png'), }
                },
                {
                    data1: { id: 1, isShow: false, image: require('./ICONS/mobiles.jpg'), text: "Mobiles" }
                    , data2: {image1: require('./ICONS/mobile1.png'),image2: require('./ICONS/mobile2.png'),
                    image3: require('./ICONS/mobile3.png'), }
                },
                {
                    data1: { id: 2, isShow: false, image: require('./ICONS/electronic.jpg'), text: "Electronics" }
                    , data2: {image1: require('./ICONS/electronic1.png'),image2: require('./ICONS/electronic2.png'),
                    image3: require('./ICONS/electronic3.png'), }
                },
                {
                    data1: { id: 3, isShow: false, image: require('./ICONS/home.jpg'), text: "Home" }
                    , data2: {image1: require('./ICONS/home1.png'),image2: require('./ICONS/home2.png'),
                    image3: require('./ICONS/home3.png'), }
                }
                , {
                    data1: { id: 4, isShow: false, image: require('./ICONS/appliences.jpg'), text: "Appliances" }
                    , data2: {image1: require('./ICONS/image1.jpg'),image2: require('./ICONS/image2.jpg'),
                    image3: require('./ICONS/image1.jpg'), }
                },
                {
                    data1: { id: 5, isShow: false, image: require('./ICONS/beauty.jpg'), text: "Beauty" }
                    , data2: {image1: require('./ICONS/fashion1.png'),image2: require('./ICONS/fashion2.png'),
                    image3: require('./ICONS/fashion3.png'), }
                }
                , {
                    data1: { id: 6, isShow: false, image: require('./ICONS/toys_with_baby.jpg'), text: "Toy & Baby" }
                    , data2: {image1: require('./ICONS/home1.png'),image2: require('./ICONS/home2.png'),
                    image3: require('./ICONS/home3.png'), }
                },
                {
                    data1: { id: 7, isShow: false, image: require('./ICONS/spoort_and_more.jpg'), text: "Sports & More" }
                    , data2: {image1: require('./ICONS/fashion1.png'),image2: require('./ICONS/fashion1.png'),
                    image3: require('./ICONS/fashion1.png'), }
                }
                , {
                    data1: { id: 8, isShow: false, image: require('./ICONS/furniture.jpg'), text: "Furniture" }
                    , data2: {image1: require('./ICONS/fashion2.png'),image2: require('./ICONS/fashion2.png'),
                    image3: require('./ICONS/fashion2.png'), }
                },
                {
                    data1: { id: 9, isShow: false, image: require('./ICONS/grocery.png'), text: "Grocery" }
                    , data2: {image1: require('./ICONS/home1.png'),image2: require('./ICONS/home2.png'),
                    image3: require('./ICONS/home3.png'), }
                }
                , {
                    data1: { id: 10, isShow: false, image: require('./ICONS/travels.png'), text: "Travel" }
                    , data2: {image1: require('./ICONS/travel1.png'),image2: require('./ICONS/travel2.png'),
                    image3: require('./ICONS/travel1.png'), }
                },
                {
                    data1: { id: 11, isShow: false, image: require('./ICONS/2gud.jpg'), text: "2GUD" }
                    , data2: {image1: require('./ICONS/2gud1.png'),image2: require('./ICONS/2gud2.jpg'),
                    image3: require('./ICONS/2gud3.png'), }
                }
            ]
        };
    }

    //   ItemSeparatorLine = () => {
    //     return (
    //       <View
    //         style={{
    //           height: .5,
    //           width: "100%",
    //           backgroundColor: "#111a0b",
    //         }}
    //       />
    //     );
    //   }

    cart = (item) => {
        let tempArray = this.state.data;
        console.log('tempArray', item.data1.id)
        for (let i = 0; i < tempArray.length; i++) {
            if (tempArray[i].data1.id == item.data1.id) {
                tempArray[i].data1.isShow = true;
                this.props.navigation.navigate('SubCategory',{item});
            }
            else if (tempArray[i].data1.id == item.data1.id) {
                tempArray[i].data1.isShow = true;
            }
            else {
                tempArray[i].data1.isShow = false;
            }
        }
        this.setState({ data: tempArray })
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>

                <View>
                    <Header title="All Categories" textColor={'white'}
                        imageLeft={require('./ICONS/white_left_arrow.png')}
                        imageRight={require('./ICONS/white_search.png')}
                        imageLast={require('./ICONS/white_shopping_trolly.png')}
                    />
                </View>

                <View>
                    <FlatList
                        data={this.state.data}
                        numColumns={3}
                        // keyExtractor={(item, index) => index}
                        //    ItemSeparatorComponent = {this.ItemSeparatorLine}

                        renderItem={({ item }) =>
                        <View>
                            <TouchableOpacity activeOpacity={.3} style={{ padding: 6.5 }} onPress={() => this.cart(item)}>
                                <View style={styles.welcome}>
                                    <Image source={item.data1.image} style={{ width: 100, height: 100 }} />
                                    <Text style={{ fontWeight: 'bold', fontSize: 17 }}  > {item.data1.text} </Text>
                                </View>
                            </TouchableOpacity>
{/* 
                            {item.data1.isShow==false ? null :
                   <View style={{flexDirection:'row',justifyContent:'space-between',margin:20}}>
<Image source={item.data2.image1} style={{width:100,height:100,margin:10}}/>
<Image source={item.data2.image2} style={{width:100,height:100,margin:10}}/>
<Image source={item.data2.image3} style={{width:100,height:100,margin:10}}/>
                   </View>
                    } */}
                            </View>
                        }/>
                    
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20,
    },
    item: {
        backgroundColor: '#6495ED',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
    },
    itemInvisible: {
        backgroundColor: 'transparent',
    },
    itemText: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    welcome: {
        height: 139, width: WIDTH / 3.3, borderWidth: 0.5,
        justifyContent: 'center', alignItems: 'center',
    }
}); 