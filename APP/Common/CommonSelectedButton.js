/**
 * @providesModule CommonSelectedButton
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

import
{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions
}from 'react-native'


var screenW = Dimensions.get('window').width;


export default class CommonSelectedButton extends Component {

    static propTypes = {
        title:PropTypes.string,
        image:PropTypes.string,
        // 样式
        imageStyle:PropTypes.oneOfType([PropTypes.object,PropTypes.number]).isRequired,
        titleStyle:PropTypes.oneOfType([PropTypes.object,PropTypes.number]),
        buttonStyle:PropTypes.oneOfType([PropTypes.object,PropTypes.number]),

        // 选中

        selectedTitleStyle:PropTypes.oneOfType([PropTypes.object,PropTypes.number]),

        selectedImage:PropTypes.string,

        // 监听
        onPress:PropTypes.func


    }
    constructor(props){
        super(props);

        this.state = {
            selected:false
        }
    }
    render(){
        return (
            <TouchableOpacity style={[styles.buttonStyle,this.props.buttonStyle]}
                              onPress={()=>{
                                  // 执行外界传入的点击按钮方法
                                  if (this.props.onPress){
                                      this.props.onPress(this);
                                  }
                              }}
            >

                {/*标题*/}
                {this.props.title?<Text style={this.state.selected?this.props.selectedTitleStyle:this.props.titleStyle}>{this.props.title}</Text>:null}

                {/*图片*/}
                {this.props.image?<Image source={{uri:this.state.selected && this.props.selectedImage?this.props.selectedImage : this.props.image}} style={[{marginLeft:3},this.props.imageStyle]}/>:null}

            </TouchableOpacity>
        )

    }

}



// 4.样式表 组件外观 尺寸,颜色
var styles = StyleSheet.create({
    buttonStyle:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
});