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
var Food = (function (_super) {
    __extends(Food, _super);
    function Food(type) {
        var _this = _super.call(this) || this;
        _this.id = type;
        // this.skinName = "FoodSkin";
        _this.skinName = FoodDevSkin;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.initUI, _this);
        return _this;
    }
    /**
     * 创建
     */
    Food.produce = function (type) {
        if (type === void 0) { type = "1"; }
        if (Food.mCacheDict[type] == null) {
            Food.mCacheDict[type] = [];
        }
        var dict = Food.mCacheDict[type];
        var item;
        if (dict.length > 0) {
            item = dict.pop();
        }
        else {
            item = new Food(type);
        }
        return item;
    };
    /**
     * 回收
     */
    Food.reclaim = function (item, type) {
        if (type === void 0) { type = "1"; }
        if (Food.mCacheDict[type] == null) {
            Food.mCacheDict[type] = [];
        }
        var dict = Food.mCacheDict[type];
        if (dict.indexOf(item) == -1) {
            dict.push(item);
            item.clear();
        }
    };
    Food.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Food.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Food.prototype.initUI = function () {
        this.kImgDrumstick.source = main_drumstick0;
        this.kImgFrties.source = main_fries;
        this.kImgTomoto.source = main_tomoto;
    };
    Food.prototype.setData = function (data) {
        this.mData = data;
        this.updateUi();
        this.invalidateState(); //标记视图状态失效/
        this.validateNow();
        // this.kImgFood1.filters = [this.mData.filter];
    };
    /** 更新数据并刷新显示 */
    Food.prototype.updateData = function () {
        this.updateUi();
        this.invalidateState(); //标记视图状态失效/
        this.validateNow();
    };
    Food.prototype.getCurrentState = function () {
        switch (this.mData.status) {
            case 1:
                return "state1"; // 未解锁
            case 2:
                return "state2"; // 已通关
        }
    };
    /** 格式化组件显示 */
    Food.prototype.updateUi = function () {
    };
    Food.prototype.cookComplete = function () {
        this.kImgDrumstick.source = main_drumstick1;
    };
    Food.prototype.flyBefore = function () {
        this.kImgDrumstick.source = main_drumstick2;
        ;
    };
    Food.prototype.showFrties = function () {
        var _this = this;
        this.kImgFrties.visible = true;
        this.kImgFrties.scaleX = this.kImgFrties.scaleY = 0;
        egret.Tween.get(this.kImgFrties).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut).call(function () {
            egret.Tween.removeTweens(_this.kImgFrties);
        });
        egret.Tween.get(this.kImgDrumstick).to({ scaleX: 1.2, scaleY: 1.2 }, 500, egret.Ease.sineOut).to({ scaleX: 1, scaleY: 1 }, 100);
    };
    Food.prototype.showTomoto = function () {
        var _this = this;
        this.kImgTomoto.visible = true;
        this.kImgTomoto.scaleX = this.kImgTomoto.scaleY = 0;
        egret.Tween.get(this.kImgTomoto).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut).call(function () {
            egret.Tween.removeTweens(_this.kImgTomoto);
        });
        egret.Tween.get(this.kImgDrumstick).to({ scaleX: 1.2, scaleY: 1.2 }, 500, egret.Ease.sineOut).to({ scaleX: 1, scaleY: 1 }, 100);
    };
    /** 清理组件相关信息 */
    Food.prototype.clear = function () {
    };
    Food.mCacheDict = {};
    return Food;
}(eui.Component));
__reflect(Food.prototype, "Food", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Food.js.map