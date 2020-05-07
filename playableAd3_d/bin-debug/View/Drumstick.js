var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * @author yang.xu
 * create on 12.16 2019
*/
var Drumstick = (function (_super) {
    __extends(Drumstick, _super);
    function Drumstick(type) {
        var _this = _super.call(this) || this;
        _this.id = type;
        _this.skinName = DrumstickDevSkin;
        // this.skinName = "DrumstickSkin";    
        _this.once(egret.Event.ADDED_TO_STAGE, _this.initUI, _this);
        return _this;
    }
    /**
     * 创建
     */
    Drumstick.produce = function (type) {
        if (type === void 0) { type = "1"; }
        if (Drumstick.mCacheDict[type] == null) {
            Drumstick.mCacheDict[type] = [];
        }
        var dict = Drumstick.mCacheDict[type];
        var item;
        if (dict.length > 0) {
            item = dict.pop();
        }
        else {
            item = new Drumstick(type);
        }
        return item;
    };
    /**
     * 回收
     */
    Drumstick.reclaim = function (item, type) {
        if (type === void 0) { type = "1"; }
        if (Drumstick.mCacheDict[type] == null) {
            Drumstick.mCacheDict[type] = [];
        }
        var dict = Drumstick.mCacheDict[type];
        if (dict.indexOf(item) == -1) {
            dict.push(item);
            item.clear();
        }
    };
    Drumstick.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Drumstick.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Drumstick.prototype.initUI = function () {
        this.kImgDrumstick1.source = main_drumstick1;
        this.kImgDrumstick2.source = main_drumstick2;
        this.kImgDrumstick3.source = main_drumstick3;
        this.kImgDisk.source = main_disk;
    };
    Drumstick.prototype.setData = function (data) {
        this.mData = data;
        this.updateUi();
        this.invalidateState(); //标记视图状态失效/
        this.validateNow();
        // this.kImgDrumstick1.filters = [this.mData.filter];
    };
    /** 更新数据并刷新显示 */
    Drumstick.prototype.updateData = function () {
        this.updateUi();
        this.invalidateState(); //标记视图状态失效/
        this.validateNow();
    };
    Drumstick.prototype.getCurrentState = function () {
        switch (this.mData.status) {
            case 1:
                return "state1"; // 未解锁
            case 2:
                return "state2"; // 已通关
            case 3:
                return "state3"; // 已通关但回退到的关卡
            case 4:
                return "state3"; // 已解锁但尚未挑战
        }
    };
    /** 格式化组件显示 */
    Drumstick.prototype.updateUi = function () {
    };
    /** 清理组件相关信息 */
    Drumstick.prototype.clear = function () {
    };
    Drumstick.prototype.showImg2 = function (callBack) {
        var _this = this;
        if (callBack === void 0) { callBack = function () { }; }
        this.kImgDrumstick2.visible = true;
        this.kImgDrumstick2.scaleX = this.kImgDrumstick2.scaleY = 0;
        egret.Tween.get(this.kImgDrumstick2).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut).call(function () {
            egret.Tween.removeTweens(_this.kImgDrumstick2);
            callBack();
        });
    };
    Drumstick.prototype.showImg3 = function (callBack) {
        var _this = this;
        if (callBack === void 0) { callBack = function () { }; }
        this.kImgDrumstick3.visible = true;
        this.kImgDrumstick3.scaleX = this.kImgDrumstick3.scaleY = 0;
        egret.Tween.get(this.kImgDrumstick3).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut).call(function () {
            egret.Tween.removeTweens(_this.kImgDrumstick3);
            callBack();
        });
    };
    Drumstick.mCacheDict = {};
    return Drumstick;
}(eui.Component));
__reflect(Drumstick.prototype, "Drumstick", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Drumstick.js.map