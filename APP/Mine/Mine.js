/**
 * @providesModule Mine
 */
import React, {Component} from 'react'

// 2.导入常用组件,注册组件,样式组件,View组件,Text组件
import
{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ImageBackground
}from 'react-native'

import Common from 'Common'

import CommonGroupListViewHeader from 'CommonGroupListViewHeader'
import Setting from 'Setting'

export default class Mine extends Component {
    constructor(props){
        super(props);

        var groups = [];

        // 搭建数据

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
        var item0 = new CommonGroupListViewHeader.CommonArrowRowItem('icon_mine_myAccount_address','课堂','学过的课程');
        var item1 = new CommonGroupListViewHeader.CommonArrowRowItem('icon_mine_myAccount_livingCity','到过的公园','5个');
        var item2 = new CommonGroupListViewHeader.CommonArrowRowItem('icon_mine_myAccount_password','阅历','');
        var item3 = new CommonGroupListViewHeader.CommonSwitchRowItem('icon_mine_myAccount_phone','笔记','');
        item1.clickCell = function () {
            alert('到过的公园');
        };
        var group0 = new CommonGroupListViewHeader.CommonGroupItem([item0,item1,item2,item3],0);
        groups.push(group0);
    }
    setupGroup1(groups){
        // 创建行模型
        var item0 = new CommonGroupListViewHeader.CommonArrowRowItem('icon_mine_myAccount_securityQuestion','收藏');
        var item1 = new CommonGroupListViewHeader.CommonSwitchRowItem('icon_mine_myAccount_setBirthday','用户指南');
        var item2 = new CommonGroupListViewHeader.CommonArrowRowItem('icon_mine_myAccount_username','我','');
        var item3 = new CommonGroupListViewHeader.CommonArrowRowItem('icon_mine_member_instructions','设置','');
        item3.route = {
            component:Setting,
        }

        var group1 = new CommonGroupListViewHeader.CommonGroupItem([item0,item1,item2,item3],20);
        groups.push(group1);
    }
    render(){

        return (
            <CommonGroupListViewHeader.CommonGroupListView groups={this.state.groups}
                                                           groupListViewStyle={{backgroundColor:Common.bgColor}}
                                                           subTitleStyle={{position:'absolute',right:20}}
                                                           navigator={this.props.navigator}
                                                           renderHeader={this._renderHeader.bind(this)}
            />
        )

    }

    // 渲染头部视图
    _renderHeader(){
        return (
            <ImageBackground source={{uri:'mine'}} style={{width:Common.screenW,height:300,justifyContent:'center',alignItems:'center'}}>
                <Image source={{uri:'person'}} style={{width:100,height:100}}/>
            </ImageBackground>
        )
    }

}



