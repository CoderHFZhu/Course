/**
 * @providesModule CommonRowCell
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
    PixelRatio,
    Switch
}from 'react-native'

import Common from 'Common'


export default class CommonRowCell extends Component {
    static propTypes = {
        rowData:PropTypes.object,
        imageStyle:PropTypes.oneOfType([PropTypes.number,PropTypes.object]),

    }


    constructor(props) {
        super(props);
        this.state = {
            isOn:false

        }

        var className = this.props.rowData.constructor.name;

        if (className == 'CommonSwitchRowItem'){
            // 判断子标题
            if (this.props.rowData.subTitle){
                throw '开关模型,不允许设置子标题';
            }
        }

    }


    render(){
        return (
            <TouchableOpacity style={styles.cellStyle}
                              onPress={()=>{
                                if(this.props.rowData.clickCell){
                                    this.props.rowData.clickCell();
                                }
                                  if(this.props.rowData.route){
                                     var route = this.props.rowData.route;
                                     route.navigator = this.props.navigator;
                                     this.props.navigator.push(route);
                                  }
                              }}
                              disabled={this.props.rowData.disabled}
            >
                {/*图片*/}
                {this.props.rowData.image?<Image source={{uri:this.props.rowData.image}} style={[styles.imageStyle,this.props.imageStyle]}/> : null}
                {/*标题*/}
                <Text style={[styles.titleStyle,this.props.titleStyle]}>{this.props.rowData.title}</Text>
                {/*子标题 switch*/}
                <Text style={[styles.subTitleStyle,this.props.subTitleStyle]}>{this.props.rowData.subTitle}</Text>
                {this._renderAccessoryView()}
            </TouchableOpacity>

        )

    }
    // 渲染右边辅助视图
    _renderAccessoryView(){

        // 获取当前对象的构造方法 => 类名
        console.log(this.props.rowData.constructor);
        var className = this.props.rowData.constructor.name;
        // 判断当前模型属于哪个类
        if (className == 'CommonArrowRowItem'){ {/*箭头*/}
            return (
                <Image source={{uri:'icon_shike_arrow'}} style={styles.arrowStyle}/>
            )
        } else if (className == 'CommonSwitchRowItem'){ {/*开关*/}
            return (
                <Switch style={styles.switchStyle}
                        onValueChange={(newValue)=>{
                            this.setState({
                                isOn:newValue
                            })
                        }}
                        value={this.state.isOn}
                />
            )
        }

        {/*什么都不显示*/}
    }
}
var styles = StyleSheet.create({
    cellStyle:{
        flexDirection:'row',
        alignItems:'center',
        width:Common.screenW,
        height:44,
        borderBottomColor:'#e5e5e5',
        borderBottomWidth:1 / PixelRatio.get(),
        backgroundColor:'white'
    },
    imageStyle:{
        width:25,
        height:25,
        marginLeft:5
    },
    arrowStyle:{
        width:7,
        height:12,
        position:'absolute',
        right:5
    },
    titleStyle:{
        marginLeft:5
    },
    subTitleStyle:{
        marginLeft:5
    },
    switchStyle:{
        position:'absolute',
        right:5
    },
})


