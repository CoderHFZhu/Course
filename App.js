/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    AsyncStorage
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components'
import Main from 'Main'
import Guide from 'Guide'
import Launch from 'Launch'
import Orientation from 'react-native-orientation';

type Props = {};
export default class App extends Component<Props> {

    guideApp(){
        // 1.读取本地数据
        var isFirst = null;

        AsyncStorage.getItem('isFirst',(error,result)=>{

            // 2.判断是否是第一次
            isFirst = result;

            // 3.第一次Guide,记录第一次
            if(isFirst){
                this.navigator.replace({component:Main})

            } else {

                // 记录
                AsyncStorage.setItem('isFirst',"true",(error)=>{
                    if(error){
                        alert('保存失败');
                    }
                });

                this.navigator.replace({component:Guide})

            }
        });
    }
        componentDidMount() {
            setTimeout(this.guideApp.bind(this),500)
            // this.guideApp();

        }

    componentWillMount() {

    }

  render() {
      return (
      <Navigator initialRoute={{
        component : Launch
      }}
                 renderScene={this.renderScene.bind(this)}
      />
    );
  }
    // 渲染组件
    renderScene(route, navigator){
        this.navigator = navigator;

        return (<route.component navigator={navigator} {...route} />)
    }
}


