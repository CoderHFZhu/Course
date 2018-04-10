
/**
 * @providesModule DiscoverScrollCell
 */
import React, {Component} from 'react'

// 2.导入常用组件,注册组件,样式组件,View组件,Text组件
import
{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView

}from 'react-native'

import Common from 'Common'

export default class DiscoverScrollCell extends Component {

    render(){

        return (
            <ScrollView style={{height:60,backgroundColor:'yellow',width:Common.screenW}}>

            </ScrollView>
        )

    }

}

/*
 *

 * */

// 4.样式表 组件外观 尺寸,颜色
var styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

