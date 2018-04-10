/**
 * @providesModule Launch
 */
import React, {Component} from 'react'

// 2.导入常用组件,注册组件,样式组件,View组件,Text组件
import
{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
}from 'react-native'
import Common from 'Common'




export default class Launch extends Component {


    render(){
        return (
            <Image source={{uri:'LaunchImage'}} style={{width:Common.screenW,height:Common.screenH}}></Image>

        )
    }

}



