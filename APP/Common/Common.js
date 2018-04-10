/**
 * @providesModule Common
 *
 */
import React, {Component} from 'react'

import
{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions

}from 'react-native'
// 自定义类
export default class Common {
    static screenW = Dimensions.get('window').width;
    static screenH = Dimensions.get('window').height;
    static bgColor = 'rgb(232,232,232)'
}