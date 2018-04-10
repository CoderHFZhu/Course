/**
 * @providesModule Discover
 */
import React, {Component} from 'react'

// 2.导入常用组件,注册组件,样式组件,View组件,Text组件
import
{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
}from 'react-native'

var discoverData = require('../Res/discoverData.json');
import CommonGroupListViewHeader from 'CommonGroupListViewHeader'
import Common from 'Common'
import CommonNavigationBar from 'CommonNavigationBar'
import DiscoverScrollCell from  'DiscoverScrollCell'
import DiscoverVideoCell from  'DiscoverVideoCell'
import VideoView from 'VideoView'


export default class Discover extends Component {


    constructor(props){
        super(props);
        var groups = [];

        // 加载第0组
        this.setupGroup0(groups);

        // 加载第1组
        this.setupGroup1(groups);

        // 加载第2组
        this.setupGroup2(groups)

        this.state = {
            groups:groups
        }
        
    }
    setupGroup0(groups){
        var section = discoverData[0];
        var sectionData = section.sData;
        var rowDatas = section.rData;
        
        var allRowData = [];
        rowDatas.forEach((rowData,i)=>{
            var item = new CommonGroupListViewHeader.CommonArrowRowItem('',rowData.name,rowData.disc);
            allRowData.push(item)
        })
        
        var group0 = new CommonGroupListViewHeader.CommonGroupItem(allRowData,sectionData.height);
        groups.push(group0)
        
    }
    setupGroup1(groups){
        var section = discoverData[1];
        var sectionData = section.sData;
        var rowDatas = section.rData;

        var item0 = new CommonGroupListViewHeader.CommonArrowRowItem('',sectionData.name,sectionData.disc);

        var item1 = new CommonGroupListViewHeader.CommonRowItem();
        item1.customData = rowDatas[0];
        item1.customCellType = DiscoverScrollCell;

        var group1 = new CommonGroupListViewHeader.CommonGroupItem([item0,item1],sectionData.height);
        groups.push(group1);

    }
    setupGroup2(groups){

        var section = discoverData[2];
        var sectionData = section.sData;
        var rowDatas = section.rData;
        var allRowData = [];
        var item0 = new CommonGroupListViewHeader.CommonArrowRowItem('',sectionData.name);
        allRowData.push(item0);

        rowDatas.forEach((rowData,i)=>{
            var item = new CommonGroupListViewHeader.CommonRowItem();
            item.customData = rowData;
            item.customCellType = DiscoverVideoCell;
            item.route = {
                component:VideoView,
                videoUri:rowData.video
            }
            allRowData.push(item);
        });

        var group1 = new CommonGroupListViewHeader.CommonGroupItem(allRowData,sectionData.height);
        groups.push(group1);
    }
    render(){
        return (
            <View>
                <CommonNavigationBar
                    titleView={this.renderTitleView()}
                />

                <CommonGroupListViewHeader.CommonGroupListView groups={this.state.groups}
                                                               groupListViewStyle={{backgroundColor:Common.bgColor,
                                                               height:Common.screenH - 113}}
                                                               navigator={this.props.navigator}
                                                               titleStyle={{fontSize:18}}
                                                               subTitleStyle={{color:'rgb(80,80,80)'}}


                />
                <View style={{height:100,width:Common.screenW,backgroundColor:'red'}}/>

            </View>
        )

    }

    renderTitleView(){
        return (
            <Image source={{uri:'discover'}} style={{width:54,height:37}}/>
        )
    }

}



