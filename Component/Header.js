import React from 'react'
import { View, Text,Dimensions,Platform,StyleSheet ,TouchableOpacity,Image,} from 'react-native'
const headerHeight=Platform.OS==='ios' ? 60 :55;
const headerWidth=Dimensions.get('window').width;
const Header=(props)=> {
    const {onPressLeft,imageLeft,title,onPressRight,imageRight,imageLast,textColor}=props;
    return (
        <View style={styles.veiw}>
              <View style={ styles.ButtonLeft}>
                <TouchableOpacity onPress={onPressLeft} >
                    <Image
                        source={imageLeft}
                        style={styles.Image1style}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.titleView}>
              <Text style={{fontSize : 22,color:textColor,}}>{title}</Text>
            </View>
            <View style={styles.ButtonRight}>
                <TouchableOpacity onPress={onPressRight} >
                    <Image
                        source={imageRight}
                        style={styles.Image1style}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.ButtonLast}>
              
                    <Image
                        source={imageLast}
                        style={styles.Image1style}
                    />
               
            </View>
        </View>
    )
}
export default Header;
const styles=StyleSheet.create({

    veiw:{
        display: 'flex',
        height: headerHeight,
        width: headerWidth,
        alignItems: 'flex-end',
        flexDirection: 'row',
        backgroundColor :'#0066cc'
    },
    Image1style: {
        padding: 10,
        margin: 10,
        height: 20,
        width: 20,
        resizeMode: 'stretch'
    },
    titleView :{
        marginBottom : 10,
        width :headerWidth -250,
        justifyContent : 'center',
        padding : 5,
        alignItems :'center',
       
    },
    ButtonRight :{
        margin : 5,
        marginHorizontal : 110,
    },
    ButtonLeft :{
        margin : 9,
        marginHorizontal : 10,
    },
    ButtonLast :{
        margin : 5,
        marginHorizontal : -100,
    },
})