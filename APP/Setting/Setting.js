/**
 * @providesModule Setting
 */
import React, {Component} from 'react'
import {Linking} from 'react-native';

// 2.导入常用组件,注册组件,样式组件,View组件,Text组件
import
{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
}from 'react-native'

import CommonNavigationBar from 'CommonNavigationBar'
import CommonHighButton from  'CommonHighButton'

// 导入自定义分组ListView
import CommonGroupListViewHeader from 'CommonGroupListViewHeader'

import Common from 'Common'


export default class Setting extends Component {
    constructor(props){
        super(props);

        var groups = [];

        // 加载第0组
        this.setupGroup0(groups);

        // 加载第1组
        this.setupGroup1(groups);

        this.state = {
            groups:groups
        }

    }
    // 加载第0组
    setupGroup0(groups){
        // 创建行模型
        var item0 = new CommonGroupListViewHeader.CommonSwitchRowItem('','消息推送');
        var item1 = new CommonGroupListViewHeader.CommonSwitchRowItem('','图书借阅');
        var item2 = new CommonGroupListViewHeader.CommonArrowRowItem('','解绑设备');
        var group0 = new CommonGroupListViewHeader.CommonGroupItem([item0,item1,item2],10);
        groups.push(group0);
    }

    // 加载第0组
    setupGroup1(groups){
        // 创建行模型
        var item0 = new CommonGroupListViewHeader.CommonArrowRowItem('','意见反馈');
        var item1 = new CommonGroupListViewHeader.CommonArrowRowItem('','关于技术圈');
        item1.clickCell = function () {
            return Linking.openURL('http://www.baidu.com')

        }

        var group1 = new CommonGroupListViewHeader.CommonGroupItem([item0,item1],10);
        groups.push(group1);
    }
    renderLeftBarButtonItem(){
        return (
            <CommonHighButton image='btn_backitem'
                              imageStyle={{width:25,height:25,position:'absolute',left:-30}}
                              onPress={()=>{
                                  this.props.navigator.pop();
                              }}

            />
        )
    }
    render(){
        return (
            <View style={{flex:1,backgroundColor:'green'}}>
                <CommonNavigationBar
                    title='设置'
                    titleStyle={styles.titleStyle}
                    leftBarButtonItem={this.renderLeftBarButtonItem()}
                />
                <CommonGroupListViewHeader.CommonGroupListView groups={this.state.groups}
                                                               groupListViewStyle={{backgroundColor:Common.bgColor}}
                                                               navigator={this.props.navigator}
                                                               titleStyle={{color:'rgb(80,80,80)'}}
                                                               renderFooter={this._renderFooter.bind(this)}

                />
            </View>
        )

    }
    // 渲染底部视图
    _renderFooter(){
        return (
            <View style={styles.footViewStyle}>
                <TouchableOpacity style={{backgroundColor:'white',marginTop:25,width:Common.screenW,height:35,justifyContent:'center',
                    alignItems:'center'}}>
                    <Text style={{color:'red'}}>立即登录</Text>
                </TouchableOpacity>
            </View>
        )
    }

}
var styles = StyleSheet.create({
    titleStyle:{
        color:'black',fontSize:18
    },
    footViewStyle:{
        width:Common.screenW,
        height:60,
    }
})


