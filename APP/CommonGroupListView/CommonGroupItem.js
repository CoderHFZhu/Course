/**
 * @providesModule CommonGroupItem
 */

// 自定义类,如果这个类需要初始化属性,一般不使用class方式,自定义类,这种定义不支持初始化传值
// export default class CommonGroupItem {
//     // 定义成员属性
//     rowsData = []
//     sectionHeight = 0
//
// }

// ES5自定义类
function CommonGroupItem(rowsData,sectionHeight) {
    this.rowsData = rowsData
    this.sectionHeight = sectionHeight

}

// 在JS中,每个文件相当于一个模块
module.exports = CommonGroupItem;