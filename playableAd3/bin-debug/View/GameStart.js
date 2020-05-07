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
var GameStart = (function (_super) {
    __extends(GameStart, _super);
    function GameStart() {
        var _this = _super.call(this) || this;
        _this.position = 0;
        // this.skinName = "GameStartSkin";
        _this.skinName = "GameStartDevSkin";
        _this.once(egret.Event.ADDED_TO_STAGE, _this.initUI, _this);
        _this.height = egret.MainContext.instance.stage.stageHeight;
        _this.width = egret.MainContext.instance.stage.stageWidth;
        return _this;
    }
    Object.defineProperty(GameStart, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new GameStart();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    GameStart.prototype.initUI = function () {
        //初始化图片UI
        this.kImgBg.source = start_bg;
        this.kImgArrow.source = main_guide_arrow;
        this.kImgGirl.source = start_girl;
        this.kImgTips1.source = start_choose;
        this.kImgTips1Bg.source = start_tips_bg1;
        this.kImgTips2.source = start_resturent;
        this.kImgTips2Bg.source = start_tips_bg2;
        this.kImgBuildA.source = start_house1;
        this.kImgBuildB.source = start_house2;
        this.kImgBuildC.source = start_house3;
        this.playStartAni();
        this.addEvents();
    };
    GameStart.prototype.playStartAni = function () {
        SoundManager.instance.playBg(SoundConst.bgm);
        this.kGrpTips1.scaleX = this.kGrpTips1.scaleY = this.kGrpTips2.scaleX = this.kGrpTips2.scaleY = 0;
        egret.Tween.get(this.kGrpTips1).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.elasticOut);
        egret.Tween.get(this.kGrpTips2).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.elasticOut);
        this.kImgArrow.x = this.kImgBuildA.x;
        this.kImgArrow.y = this.kImgBuildA.y;
        this.playAni();
    };
    GameStart.prototype.playAni = function () {
        var _this = this;
        var arr = [this.kImgBuildA, this.kImgBuildB, this.kImgBuildC];
        egret.Tween.get(arr[this.position]).to({ scaleX: 1.2, scaleY: 1.2 }, 300).to({ scaleX: 1, scaleY: 1 }, 100).call(function () {
            _this.position++;
            if (_this.position === 3)
                _this.position = 0;
            egret.Tween.get(_this.kImgArrow).to({ x: arr[_this.position].x, y: arr[_this.position].y }, 600).call(function () {
                _this.playAni();
            });
        });
    };
    GameStart.prototype.addEvents = function () {
        this.kImgBuildA.once(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
        this.kImgBuildB.once(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
        this.kImgBuildC.once(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
    };
    GameStart.prototype.startGame = function (evt) {
        var _this = this;
        SoundManager.instance.playEffect(SoundConst.click);
        this.kImgBuildA.touchEnabled = this.kImgBuildB.touchEnabled = this.kImgBuildC.touchEnabled = false;
        this.kImgArrow.visible = false;
        this.kGrpContent.setChildIndex(evt.target, 5);
        egret.Tween.removeAllTweens();
        SoundManager.instance.playEffect(SoundConst.wuwu);
        egret.Tween.get(evt.target).to({ x: 545, y: 178, scaleX: 7, scaleY: 7, rotation: 1080 }, 800, egret.Ease.circIn).call(function () {
            _this.stage.addChild(MainView.instance);
            _this.stage.removeChild(GameStart.instance);
        });
    };
    //设置延迟回调
    GameStart.prototype.setTimeCallBack = function (t, f) {
        var ti = egret.setTimeout(function () {
            egret.clearTimeout(ti);
            f();
        }, this, t);
    };
    //屏幕旋转
    GameStart.prototype.onRotation = function (event) {
        // alert("resize")
        //此处需要重置Ui
        function CallBack() {
            this.width = egret.MainContext.instance.stage.stageWidth;
            this.height = egret.MainContext.instance.stage.stageHeight;
            this.x = this.y = 0;
            this.scaleX = this.scaleY = 1;
        }
        this.setTimeCallBack(600, CallBack.bind(this));
    };
    return GameStart;
}(eui.Component));
__reflect(GameStart.prototype, "GameStart", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GameStart.js.map