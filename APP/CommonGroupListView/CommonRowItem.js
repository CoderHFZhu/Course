/**
 * @providesModule CommonRowItem
 */

// ES5自定义类
function CommonRowItem(image,title,subTitle) {
    this.image = image
    this.title = title
    this.subTitle = subTitle
    this.clickCell = null;
    this.route = null;

    // 自定义Cell
    this.customData = null;
    this.customCellType = null;

}

// 在JS中,每个文件相当于一个模块
module.exports = CommonRowItem;