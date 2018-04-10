/**
 * @providesModule VideoView
 */
import React, {Component} from 'react'
import Orientation from 'react-native-orientation';

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

import Video from 'react-native-video';
import Common from 'Common'
import CommonNavigationBar from 'CommonNavigationBar'
import CommonHighButton from  'CommonHighButton'

export default class VideoView extends Component {
    componentDidMount() {
        // this locks the view to Portrait Mode


    }

    constructor(props){
        super(props);
        this.state = {
            screenWidth:Common.screenW
        }
    }

    componentWillMount() {
        Orientation.lockToLandscape();
        this.setState = {
            screenWidth:Common.screenW
        }

    }

    componentWillUnmount() {
        Orientation.lockToPortrait();


    }

    componentWillReceiveProps(nextProps) {
        Orientation.lockToPortrait();

    }
    renderLeftBarButtonItem(){
        return (
            <CommonHighButton image='btn_backitem'
                              imageStyle={{width:25,height:25,position:'absolute',left:-30}}
                              onPress={()=>{
                                  Orientation.lockToPortrait();

                                  this.props.navigator.pop();
                              }}

            />
        )
    }

    render(){
        return (
            <View style={{flex:1,backgroundColor:'green'}}>
                <CommonNavigationBar
                    title='播放'
                    titleStyle={styles.titleStyle}
                    barStyle={{width:this.props.screenWidth}}
                    leftBarButtonItem={this.renderLeftBarButtonItem()}
                />
                <Video source={{uri:this.props.videoUri}} // Looks for .mp4 file (background.mp4) in the given expansion version.
                       ref={(ref) => {
                           this.player = ref
                       }}// Store reference
                       rate={1.0}                              // 0 is paused, 1 is normal.
                       volume={1.0}                            // 0 is muted, 1 is normal.
                       muted={false}                           // Mutes the audio entirely.
                       paused={false}                          // Pauses playback entirely.
                       resizeMode="contain"                      // Fill the whole screen at aspect ratio.*
                       repeat={false}                           // Repeat forever.
                       playInBackground={false}                // Audio continues to play when app entering background.
                       playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
                       ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
                       progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
                       onLoadStart={this.loadStart}            // Callback when video starts to load
                       onLoad={this.setDuration}               // Callback when video loads
                       onProgress={this.setTime}               // Callback every ~250ms with currentTime
                       onEnd={this.onEnd}                      // Callback when playback finishes
                       onError={this.videoError}               // Callback when video cannot be loaded
                       onBuffer={this.onBuffer}                // Callback when remote video is buffering
                       onTimedMetadata={this.onTimedMetadata}  // Callback when the stream receive some metadata
                       style={styles.backgroundVideo} />
            </View>
        )

    }

}


var styles = StyleSheet.create({
    titleStyle:{
        color:'black',fontSize:18
    },
    backgroundVideo: {
        flex:1
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // bottom: 0,
        // right: 0,

    }
});
