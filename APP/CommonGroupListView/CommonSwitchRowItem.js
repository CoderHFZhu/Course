/**
 * @providesModule CommonSwitchRowItem
 */
// 继承: JS没有继承 , ES6
// 假继承

import CommonRowItem from 'CommonRowItem'

function CommonSwitchRowItem(image,title,subTitle) {
    CommonRowItem.call(this,image,title,subTitle);
    this.disabled = true;
}

// 在JS中,每个文件相当于一个模块
module.exports = CommonSwitchRowItem;