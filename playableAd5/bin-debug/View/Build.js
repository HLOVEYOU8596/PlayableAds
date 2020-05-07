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
var Build = (function (_super) {
    __extends(Build, _super);
    function Build() {
        var _this = _super.call(this) || this;
        _this.type = 1;
        _this.skinName = BuildSkin;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.initUI, _this);
        return _this;
    }
    Build.prototype.initUI = function () {
        this.bg.source = main_itembg;
        this.kImgContent.cacheAsBitmap = true;
    };
    Build.prototype.setContent = function (type) {
        this.type = type;
        switch (type) {
            case 1:
                this.kImgContent.source = main_build1;
                break;
            case 2:
                this.kImgContent.source = main_build2;
                break;
            case 3:
                this.kImgContent.source = main_build3;
                break;
        }
    };
    /**
     * 设置是否通关
    */
    Build.prototype.setType = function (flag) {
        //颜色矩阵数组
        var colorMatrix = [
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0, 0, 0, 1, 0
        ];
        var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
        var glowFilter = new egret.GlowFilter(0xfaf4ac, 0.8, 70, 70, 2, 3 /* HIGH */, false, false);
        if (flag) {
            this.kImgContent.filters = [colorFlilter];
        }
        else {
            this.kImgContent.filters = [glowFilter];
        }
    };
    return Build;
}(eui.Component));
__reflect(Build.prototype, "Build");
//# sourceMappingURL=Build.js.map