/**
 * @providesModule Main
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
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

import TabNavigator from 'react-native-tab-navigator';
import Discover from 'Discover'
import Park from 'Park'
import Mine from 'Mine'
import Reading from 'Reading'



export default class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedIndex:0
        }
    }

    // 渲染提示数字
    renderBadge(badgeText){
        return (
            <View style={styles.badgeStyle}>
                <Text style={{color:'white',fontSize:10}}>{badgeText}</Text>
            </View>
        )
    }

    // 渲染TabBarItem
    renderTabBarItem(i,title,uri,selectedUri,component,badgeText){

        return (
            <TabNavigator.Item
                selected={this.state.selectedIndex == i}
                title={title}
                renderIcon={() => <Image source={{uri:uri}} style={styles.tabIcon}/>}
                renderSelectedIcon={() => <Image source={{uri:selectedUri}} style={styles.tabIcon}/>}
                selectedTitleStyle={{color:'rgb(56,165,157)'}}
                renderBadge={badgeText?this.renderBadge.bind(this,badgeText):null}
                onPress={()=>{
                    this.setState({
                        selectedIndex:i
                    })
                }}
            >
                {component}
            </TabNavigator.Item>
        )

    }






    render(){
        return (
            <TabNavigator>
                {/*畅读*/}
                {this.renderTabBarItem(0,'畅读','icon_tabbar_homepage','icon_tabbar_homepage_selected',<Reading
                    navigator={this.props.navigator}/>,10)}

                {/*公园*/}
                {this.renderTabBarItem(1,'公园','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected',<Park navigator={this.props.navigator}/>)}

                {/*发现*/}
                {this.renderTabBarItem(2,'发现','icon_tabbar_misc','icon_tabbar_misc_selected',<Discover navigator={this.props.navigator}/>)}

                {/*我*/}
                {this.renderTabBarItem(3,'我','icon_tabbar_mine','icon_tabbar_mine_selected',<Mine navigator={this.props.navigator}/>)}

            </TabNavigator>
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
    },
    tabIcon:{
        width:25,
        height:25
    },
    badgeStyle:{
        width:16,
        height:16,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
        marginTop:3

    }
})

