/*
* name;
*/
class CommonUtils extends BaseClass {

    constructor() {
        super();
    }

    /**
     * 给字体添加描边
     * @param lable  文字 {Laya.Lable|Laya.Text}
     * @param color  表示文本的描边颜色 {string}
     * @param width  描边宽度 {number}
     */
    addLableStrokeColor(lable, color, width) {
        lable.strokeColor = color;
        lable.stroke = width;
    }

    /**
     * 深度复制
     * @param {any}
     * @return {any}
     */
    copy(obj) {
        let newObj;
        if (obj instanceof Array) {
            newObj = [];
        }else if (obj instanceof Object) {
            newObj = {};
        }else {
            return obj;
        }
        let keys = Object.keys(obj);
        for (let i = 0, len = keys.length; i < len; i++) {
            let key = keys[i];
            newObj[key] = this.copy(obj[key]);
        }
        return newObj;
    }

    /**
     * 万字的显示
     * @param label {Laya.Lable|Laya.Text}
     * @param num {number}
     */
    labelIsOverLenght (label, num) {
        let str = null;
        if (num < 10000) {
            str = num + "";
        }else if (num < 10000 * 1000) {
            str = Math.floor(num / 10000).toString() + "万";
        }else {
            str = Math.floor(num / 10000000).toString() + "千万";
        }
        label.text = str;
    };

    /**
     * int64转number
     * @param obj {any}
     * @return {number}
     */
    int64ToNumber(obj) {
        return parseInt(obj.toString());
    }

}