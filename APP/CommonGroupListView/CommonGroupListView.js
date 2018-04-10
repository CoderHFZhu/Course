/**
 * @providesModule CommonGroupListView
 */
import React, {Component} from 'react'

// 2.导入常用组件,注册组件,样式组件,View组件,Text组件
import
{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView
}from 'react-native'
import PropTypes from 'prop-types'
import CommonRowCell from "CommonRowCell";




export default class CommonGroupListView extends Component {

    static propTypes = {
        groups:PropTypes.array,
        groupListViewStyle:PropTypes.oneOfType([PropTypes.number,PropTypes.object]),
        imageStyle:PropTypes.oneOfType([PropTypes.number,PropTypes.object]),
        titleStyle:PropTypes.oneOfType([PropTypes.number,PropTypes.object]),
        subTitleStyle:PropTypes.oneOfType([PropTypes.number,PropTypes.object]),
        navigator:PropTypes.object,

        renderHeader:PropTypes.func,
        renderFooter:PropTypes.func

    }


    constructor(props){
        super(props);

        var ds = new ListView.DataSource({
            rowHasChanged:(r1,r2)=>{
                return r1 != r2;
            },
            sectionHeaderHasChanged:(s1,s2)=> s1 != s2
        });

        var groups = this.props.groups;

        var sectionData = [];

        groups.forEach((groupItem,i)=>{
            sectionData.push(groupItem.rowsData);
        })

        ds = ds.cloneWithRowsAndSections(sectionData);
        this.state = {
            ds:ds
        }



    }





    render(){
        return (
                <ListView dataSource={this.state.ds}
                          renderRow={this._renderRow.bind(this)}
                          renderSectionHeader={this._renderSectionHeader.bind(this)}
                          style={this.props.groupListViewStyle}
                          renderHeader={this.props.renderHeader}
                          renderFooter={this.props.renderFooter}
                />
        )

    }

    _renderRow(rowData,sectioniD,rowID){
        return(
            rowData.customData?<rowData.customCellType rowData={rowData} {...this.props}/>:<CommonRowCell rowData={rowData} {...this.props}/>
            )
    }
    _renderSectionHeader(sectionData,sectionID){
        var groupItem = this.props.groups[sectionID];

        return (
            <View style={{height:groupItem.sectionHeight}}></View>
        )
    }

}



