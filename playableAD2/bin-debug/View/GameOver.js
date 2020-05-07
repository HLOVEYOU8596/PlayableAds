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
var GameOver = (function (_super) {
    __extends(GameOver, _super);
    function GameOver() {
        var _this = _super.call(this) || this;
        _this.skinName = "GameOverDevSkin";
        // this.skinName = "GameOverSkin";
        _this.once(egret.Event.ADDED_TO_STAGE, _this.initUI, _this);
        return _this;
    }
    Object.defineProperty(GameOver, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new GameOver();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    GameOver.prototype.initUI = function () {
        //初始化图片UI
        // this.kImgBg.source = end_bg;
        // this.kImgLeft.source = end_float;
        // this.kImgRight.source = end_float;
        // this.kImgBan.source = end_small_bg;
        // this.kImgBuildA.source = end_build_left;
        // this.kImgBuildB.source = end_build_right;
        this.playStartAni();
        this.addEvents();
    };
    GameOver.prototype.playStartAni = function () {
        egret.Tween.get(this.kImgLeft, { loop: true }).to({ scaleX: 0.9, scaleY: 0.9 }, 2000).to({ scaleX: 1, scaleY: 1 }, 2000);
        egret.Tween.get(this.kImgRight, { loop: true }).to({ scaleX: 0.9, scaleY: 0.9 }, 2000).to({ scaleX: 1, scaleY: 1 }, 2000);
    };
    GameOver.prototype.addEvents = function () {
        this.addEventListener("big", this.dealBig, this);
        this.kImgBuildA.addEventListener(egret.TouchEvent.TOUCH_TAP, MainView.instance.openPlateForm, this);
        this.kImgBuildB.addEventListener(egret.TouchEvent.TOUCH_TAP, MainView.instance.openPlateForm, this);
    };
    GameOver.prototype.dealBig = function (data) {
        var _this = this;
        if (data.data == 1) {
            egret.Tween.get(this.kImgBuildA).to({ scaleX: 1.1, scaleY: 1.1 }, 200).to({ scaleX: 1, scaleY: 1 }, 100).call(function () {
                egret.Tween.removeTweens(_this.kImgBuildA);
            });
        }
        else {
            egret.Tween.get(this.kImgBuildB).to({ scaleX: 1.1, scaleY: 1.1 }, 200).to({ scaleX: 1, scaleY: 1 }, 100).call(function () {
                egret.Tween.removeTweens(_this.kImgBuildB);
            });
        }
    };
    return GameOver;
}(eui.Component));
__reflect(GameOver.prototype, "GameOver", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GameOver.js.map