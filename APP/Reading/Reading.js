/**
 * @providesModule Reading
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
    Image
}from 'react-native'


import CommonNavigationBar from 'CommonNavigationBar'
import CommonHighButton from  'CommonHighButton'
import CommonSelectedButton from  'CommonSelectedButton'


export default class Reading extends Component {

    renderLeftBarButtonItem(){
        return (
            <CommonHighButton image='nav_item_game_icon'
                              highlightedImage='nav_item_game_click_icon'
                              highlightedTitleStyle={{color:'red'}}
                              title='按钮'
                              imageStyle={{width:15,height:15}}

            />
        )
    }
// 渲染右边View
    renderRightBarButtonItem(){
        return (
            <CommonSelectedButton image='mine-moon-icon'
                                  imageStyle={{width:15,height:15}}
                                  selectedImage='mine-sun-icon-click'
                                  onPress={this.clickSelectButton.bind(this)}
            />
        )
    }
    // 渲染中间View
    renderTitleView(){
        return (
            <Image source={{uri:'reading'}} style={{width:54,height:37}}/>
        )
    }

    clickSelectButton(button){
        button.setState({
            selected:!button.state.selected
        })
    }


    render(){
        return (
            <View>
                <CommonNavigationBar leftBarButtonItem={this.renderLeftBarButtonItem()}
                                        rightBarButtonItem={this.renderRightBarButtonItem()}
                                        titleView={this.renderTitleView()}/>

                <View style={{flex:1,backgroundColor:'red'}}/>
            </View>


        )

    }

}



