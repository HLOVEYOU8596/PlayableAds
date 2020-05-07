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
// TypeScript file
/**
 *  @author yang.xu
 *  create on 2019.12.10
*/
var Hamburg = (function (_super) {
    __extends(Hamburg, _super);
    function Hamburg(type) {
        var _this = _super.call(this) || this;
        _this.id = type;
        // this.skinName = "HamburgSkin";
        _this.skinName = "HamburgDevSkin";
        _this.once(egret.Event.ADDED_TO_STAGE, _this.initUI, _this);
        return _this;
    }
    /**
     * 创建
     */
    Hamburg.produce = function (type) {
        if (type === void 0) { type = "1"; }
        if (Hamburg.mCacheDict[type] == null) {
            Hamburg.mCacheDict[type] = [];
        }
        var dict = Hamburg.mCacheDict[type];
        var item;
        if (dict.length > 0) {
            item = dict.pop();
        }
        else {
            item = new Hamburg(type);
        }
        return item;
    };
    /**
     * 回收
     */
    Hamburg.reclaim = function (item, type) {
        if (type === void 0) { type = "1"; }
        if (Hamburg.mCacheDict[type] == null) {
            Hamburg.mCacheDict[type] = [];
        }
        var dict = Hamburg.mCacheDict[type];
        if (dict.indexOf(item) == -1) {
            dict.push(item);
            item.clear();
        }
    };
    Hamburg.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Hamburg.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Hamburg.prototype.initUI = function () {
        this.kImgHam1.source = main_ham1;
        this.kImgHam2.source = main_ham2;
        this.kImgHam3.source = main_ham3;
        this.kImgHam4.source = main_ham4;
        this.kImgHam5.source = main_ham5;
    };
    Hamburg.prototype.setData = function (data) {
        this.mData = data;
        this.updateUi();
        this.invalidateState(); //标记视图状态失效/
        this.validateNow();
        // this.kImgHam1.filters = this.kImgHam2.filters = this.kImgHam3.filters = this.kImgHam4.filters = this.kImgHam5.filters = [this.mData.filter];
    };
    /** 更新数据并刷新显示 */
    Hamburg.prototype.updateData = function () {
        this.updateUi();
        this.invalidateState(); //标记视图状态失效/
        this.validateNow();
    };
    Hamburg.prototype.getCurrentState = function () {
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
    Hamburg.prototype.updateUi = function () {
    };
    /** 清理组件相关信息 */
    Hamburg.prototype.clear = function () {
    };
    Hamburg.prototype.showImg3 = function (callBack) {
        var _this = this;
        if (callBack === void 0) { callBack = function () { }; }
        this.kImgHam3.visible = true;
        this.kImgHam3.scaleX = this.kImgHam4.scaleY = 0;
        egret.Tween.get(this.kImgHam3).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut).call(function () {
            egret.Tween.removeTweens(_this.kImgHam3);
            callBack();
        });
    };
    Hamburg.prototype.showImg4 = function (callBack) {
        var _this = this;
        if (callBack === void 0) { callBack = function () { }; }
        this.kImgHam4.visible = true;
        this.kImgHam4.scaleX = this.kImgHam4.scaleY = 0;
        egret.Tween.get(this.kImgHam4).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut).call(function () {
            egret.Tween.removeTweens(_this.kImgHam4);
            callBack();
        });
    };
    Hamburg.prototype.downHam = function (callBack) {
        var _this = this;
        if (callBack === void 0) { callBack = function () { }; }
        this.kImgHam5.visible = true;
        this.kImgHam5.y = -200;
        egret.Tween.get(this.kImgHam5).to({ y: 74 }, 500, egret.Ease.circIn).call(function () {
            egret.Tween.removeTweens(_this.kImgHam5);
            callBack();
        });
    };
    Hamburg.mCacheDict = {};
    return Hamburg;
}(eui.Component));
__reflect(Hamburg.prototype, "Hamburg", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Hamburg.js.map