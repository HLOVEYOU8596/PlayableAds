// TypeScript file
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
var GuideStep = (function (_super) {
    __extends(GuideStep, _super);
    function GuideStep() {
        var _this = _super.call(this) || this;
        _this.guideStep = 0;
        _this.pointArr = [];
        _this.area = new eui.Rect();
        return _this;
    }
    /**
     * dp 确保已经定位并且没有加入到显示列表中。
     */
    GuideStep.prototype.init = function (dp, arr) {
        dp.touchEnabled = false;
        //TO DO 初始化手指
        this.kImgArrow = new eui.Image(main_guide_arrow);
        this.kImgArrow.visible = false;
        this.area.width = 200;
        this.area.height = 200;
        dp.addChild(this.kImgArrow);
        dp.addChild(this.area);
        this.pointArr = arr;
        this.area.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    };
    //每一步引导完成移动手指
    GuideStep.prototype.moveHand = function (callBack) {
        this.callBack = callBack;
        this.area.visible = true;
        console.log("引导step:", this.guideStep);
        var point = this.pointArr[this.guideStep];
        this.kImgArrow.visible = true;
        this.kImgArrow.x = point.x;
        this.kImgArrow.y = point.y;
        this.area.x = point.x - this.area.width + 50;
        this.area.y = point.y - this.area.height + 50;
        this.area.alpha = 0;
        this.kImgArrow.scaleX = 1.1;
        this.kImgArrow.scaleY = 1.1;
        egret.Tween.get(this.kImgArrow, { loop: true }).
            to({ scaleX: 0.8, scaleY: 0.8 }, 500, egret.Ease.quartInOut)
            .to({ scaleX: 1.1, scaleY: 1.1 }, 500, egret.Ease.quartInOut);
    };
    GuideStep.prototype.clearHand = function () {
        this.area.visible = false;
        this.kImgArrow.visible = false;
        egret.Tween.removeTweens(this.kImgArrow);
        this.guideStep++;
        this.callBack = null;
    };
    GuideStep.prototype.onClick = function () {
        this.callBack();
        this.playButtonClick();
    };
    //播放点击音效
    GuideStep.prototype.playButtonClick = function () {
        SoundManager.instance.playEffect(SoundConst.click);
    };
    return GuideStep;
}(egret.DisplayObjectContainer));
__reflect(GuideStep.prototype, "GuideStep");
//# sourceMappingURL=GuideStep.js.map