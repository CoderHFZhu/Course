/**
 * @providesModule CommonHighButton
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
    Image,
    Dimensions
}from 'react-native'

var screenW = Dimensions.get('window').width;




export default class CommonHighButton extends Component {

    static propTypes = {
        //标题
        title: PropTypes.string,
        image:PropTypes.string,

        imageStyle:PropTypes.oneOfType([PropTypes.object,PropTypes.number]),
        titleStyle:PropTypes.oneOfType([PropTypes.object,PropTypes.number]),
        buttonStyle:PropTypes.oneOfType([PropTypes.object,PropTypes.number]),
        highlightedTitleStyle:PropTypes.oneOfType([PropTypes.object,PropTypes.number]),

        highlightedImage:PropTypes.string,
        //事件
        onPress:PropTypes.func

    }
    constructor(props){
        super(props);

        this.state = {
            highlighted:false
        }
    }

    render(){
        return (
            <TouchableOpacity style={[styles.buttonStyle,this.props.buttonStyle]}
                              onPressIn={()=>{
                                  this.setState({
                                      highlighted:true
                                  })
                                  if (this.props.onPress) {
                                      this.props.onPress(this);
                                  }
                              }}
                              onPressOut={()=>{
                                  this.setState({
                                      highlighted:false
                                  })
                              }}
                              activeOpacity={this.props.highlightedImage?1:0.5}

            >
                {/*//如果高亮 而且设置了 title 和image  就有高亮效果*/}
                {this.props.title?<Text style={this.state.highlighted && this.props.highlightedTitleStyle ? this.props.highlightedTitleStyle:this.props.titleStyle}>{this.props.title}</Text> : null}
                {this.props.image?<Image source={{uri:this.state.highlighted && this.props.highlightedImage?this.props.highlightedImage : this.props.image}} style={[{marginLeft:3},this.props.imageStyle]}/>:null}

            </TouchableOpacity>
        )

    }

}


var styles = StyleSheet.create({
    buttonStyle:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
});
