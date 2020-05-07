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
var ProgressBar = (function (_super) {
    __extends(ProgressBar, _super);
    function ProgressBar() {
        var _this = _super.call(this) || this;
        _this.skinName = "ProgressBarSkin";
        console.log("初始化");
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initUI, _this);
        return _this;
    }
    ProgressBar.prototype.initUI = function () {
        this.bg.source = main_progress_bg;
        this.thumb["source"] = main_progress;
        this.thumb["scale9Grid"] = new egret.Rectangle(30, 10, 10, 10);
        this.logo.source = main_icon_coin;
    };
    return ProgressBar;
}(eui.ProgressBar));
__reflect(ProgressBar.prototype, "ProgressBar");
//# sourceMappingURL=ProgressBar.js.map