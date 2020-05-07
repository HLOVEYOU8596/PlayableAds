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
    Object.defineProperty(GuideStep, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new GuideStep();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * dp 确保已经定位并且没有加入到显示列表中。
     */
    GuideStep.prototype.init = function (dp, arr) {
        dp.touchEnabled = false;
        //TO DO 初始化手指
        this.kImgArrow = new eui.Image(main_guide_arrow);
        this.kImgArrow.visible = false;
        this.area.width = 600;
        this.area.height = 600;
        dp.addChild(this.kImgArrow);
        dp.addChild(this.area);
        this.pointArr = arr;
    };
    //每一步引导完成移动手指
    GuideStep.prototype.moveHand = function (callBack) {
        this.area.visible = true;
        this.area.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.callBack = callBack;
        console.log("引导step:", this.guideStep);
        var point = this.pointArr[this.guideStep];
        this.kImgArrow.visible = true;
        this.kImgArrow.x = point.x;
        this.kImgArrow.y = point.y;
        this.area.x = point.x - this.area.width + 300;
        this.area.y = point.y - this.area.height + 300;
        this.area.alpha = 0;
        if (this.guideStep < this.pointArr.length - 1) {
            this.kImgArrow.scaleX = 1.1;
            this.kImgArrow.scaleY = 1.1;
            egret.Tween.get(this.kImgArrow, { loop: true }).
                to({ scaleX: 0.8, scaleY: 0.8 }, 500, egret.Ease.quartInOut)
                .to({ scaleX: 1.1, scaleY: 1.1 }, 500, egret.Ease.quartInOut);
        }
        else {
            this.kImgArrow.x = 300;
            this.kImgArrow.y = 400;
            this.playRight();
        }
    };
    GuideStep.prototype.playRight = function () {
        var _this = this;
        egret.Tween.get(this.kImgArrow).call(function () {
            MainView.instance.gameOver.dispatchEventWith("big", false, 1);
        }).wait(300).to({ x: 840 }, 800).call(function () {
            _this.playLeft();
        });
    };
    GuideStep.prototype.playLeft = function () {
        var _this = this;
        egret.Tween.get(this.kImgArrow).call(function () {
            MainView.instance.gameOver.dispatchEventWith("big", false, 2);
        }).wait(300).to({ x: 440 }, 800).call(function () {
            _this.playRight();
        });
    };
    GuideStep.prototype.clearHand = function () {
        console.log("clear hand");
        this.kImgArrow.visible = false;
        egret.Tween.removeTweens(this.kImgArrow);
        this.guideStep++;
        this.callBack = null;
        this.area.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.area.visible = false;
    };
    GuideStep.prototype.onClick = function () {
        this.callBack();
        SoundManager.instance.playEffect(SoundConst.click);
    };
    return GuideStep;
}(egret.DisplayObjectContainer));
__reflect(GuideStep.prototype, "GuideStep");
//# sourceMappingURL=GuideStep.js.map