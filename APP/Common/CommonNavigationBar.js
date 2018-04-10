/**
 * @providesModule CommonNavigationBar
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

import
{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Platform
}from 'react-native'

var screenW = Dimensions.get('window').width;

export default class CommonNavigationBar extends Component {
    static propTypes = {
        title : PropTypes.string,
        titleView : PropTypes.object,
        // 左边
        leftBarButtonItem : PropTypes.object,

        // 右边
        rightBarButtonItem : PropTypes.object,

        titleStyle : PropTypes.oneOfType([PropTypes.object,PropTypes.number]),
        barStyle : PropTypes.oneOfType([PropTypes.object,PropTypes.number]),
    }

    render(){
        return(
            <View style={[styles.barStyle,this.props.barStyle]}>
                <View style={styles.contentView}>
                    {/*左边*/}
                    <View style={styles.leftView}>
                        {this.props.leftBarButtonItem}
                    </View>

                    {/*中间*/}
                    <View style={styles.middleView}>
                        {this.props.title?<Text style={this.props.titleStyle}>{this.props.title}</Text> :this.props.titleView}
                    </View>

                    {/*右边*/}
                    <View style={styles.rightView}>
                        {this.props.rightBarButtonItem}
                    </View>
                </View>

            </View>
        )
    }
}
var styles = StyleSheet.create({
    barStyle:{
        height:Platform.OS == 'ios'? 64 : 44,
        width:screenW,
        backgroundColor:'white',
        borderBottomWidth:1,
        borderBottomColor:'#e8e8e8'
    },
    contentView:{
        height:40,
        width:screenW,
        marginTop:Platform.OS == 'ios' ? 20 : 0,
        flexDirection:'row',
        backgroundColor: 'transparent'
    },
    leftView:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        height:40,

    },
    middleView:{
        flex:3,
        justifyContent:'center',
        alignItems:'center',
        height:40,

    },
    rightView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }

})