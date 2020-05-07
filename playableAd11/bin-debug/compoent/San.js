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
var San = (function (_super) {
    __extends(San, _super);
    function San(type) {
        if (type === void 0) { type = 1; }
        var _this = _super.call(this) || this;
        _this.skinName = SanSkin;
        _this.type = type;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initUI, _this);
        return _this;
    }
    San.prototype.initUI = function () {
        this.kImgFood1.source = main_food1;
        this.kImgFood2.source = main_food2;
        this.kImgFood3.source = main_food3;
        this.kImgFood4.source = main_food4;
        this.kImgFood5.source = main_food5;
        this.updateUI();
    };
    San.prototype.updateUI = function () {
        this.invalidateState();
        this.validateNow();
    };
    San.prototype.getCurrentState = function () {
        switch (this.type) {
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
    San.prototype.showImg2 = function () {
        this.kImgFood2.visible = true;
        this.kImgFood2.scaleX = this.kImgFood2.scaleY = 0;
        egret.Tween.removeTweens(this.kImgFood2);
        egret.Tween.get(this.kImgFood2).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut);
    };
    San.prototype.showImg3 = function () {
        this.kImgFood3.visible = true;
        this.kImgFood3.scaleX = this.kImgFood3.scaleY = 0;
        egret.Tween.removeTweens(this.kImgFood3);
        egret.Tween.get(this.kImgFood3).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut);
    };
    San.prototype.showImg4 = function () {
        this.kImgFood4.visible = true;
        this.kImgFood4.scaleX = this.kImgFood4.scaleY = 0;
        egret.Tween.removeTweens(this.kImgFood4);
        egret.Tween.get(this.kImgFood4).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut);
    };
    San.prototype.showImg5 = function () {
        this.kImgFood5.visible = true;
        this.kImgFood5.y = -100;
        egret.Tween.removeTweens(this.kImgFood5);
        egret.Tween.get(this.kImgFood5).to({ y: 50 }, 300, egret.Ease.sineIn);
    };
    return San;
}(eui.Component));
__reflect(San.prototype, "San", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=San.js.map