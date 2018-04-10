/**
 * @providesModule CommonArrowRowItem
 */
// 继承: JS没有继承 , ES6
// 假继承

import CommonRowItem from 'CommonRowItem'

function CommonArrowRowItem(image,title,subTitle) {
    // CommonArrowRowItem => CommonRowItem()
    CommonRowItem.call(this,image,title,subTitle);

    // call方法: 1.交换方法实现 2.交换方法调用者
    // 本质:让某个对象去执行某个方法
}

// 在JS中,每个文件相当于一个模块
module.exports = CommonArrowRowItem;