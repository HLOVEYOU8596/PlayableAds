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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// TypeScript file
var MainView = (function (_super) {
    __extends(MainView, _super);
    function MainView() {
        var _this = _super.call(this) || this;
        //引导相关变量
        _this.guideArr = [new egret.Point(714, 632), new egret.Point(714, 632), new egret.Point(714, 632),
            // new egret.Point(714, 632), new egret.Point(714, 632), new egret.Point(714, 632),
            // new egret.Point(714, 632), new egret.Point(714, 632), new egret.Point(714, 632),
            new egret.Point(836, 632), new egret.Point(836, 632), new egret.Point(836, 632),
            // new egret.Point(836, 632), new egret.Point(836, 632), new egret.Point(836, 632),
            // new egret.Point(836, 632), new egret.Point(836, 632), new egret.Point(836, 632),
            new egret.Point(577, 632), new egret.Point(516, 456), new egret.Point(567, 202),
            new egret.Point(697, 456), new egret.Point(658, 202), new egret.Point(929, 456),
            new egret.Point(776, 202),
        ];
        _this.pointArr = [];
        _this.clickNum = 0; //点击次数
        _this.swiperNum = 0; //滑动次数
        _this.skinName = "MainViewDevSkin";
        // this.skinName = "MainViewSkin";
        _this.once(egret.Event.ADDED_TO_STAGE, _this.initUI, _this);
        _this.height = egret.MainContext.instance.stage.stageHeight;
        _this.width = egret.MainContext.instance.stage.stageWidth;
        return _this;
    }
    Object.defineProperty(MainView, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new MainView();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 初始化游戏界面UI
    */
    MainView.prototype.initUI = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // this.playShade();
                this.kImgContent.source = main_bg2;
                this.kImgBg1.source = main_bg1;
                this.kImgTips.source = main_swiper;
                this.kImgArrow.source = main_arrow;
                this.kImgPeople.source = main_logo;
                this.kImgHand.source = main_guide_arrow;
                this.kBtnPlay.source = play_free;
                // this.kImgPeople.visible = false;
                // let load = await Dragon.createArmature(640,420,'load',this.kGrpTop,load_ske_j,load_tex,load_tex_j);
                // load.animation.play('load',0); 
                // load.scaleX = load.scaleY = 1.3;
                this.playStartAni();
                this.addEvents();
                return [2 /*return*/];
            });
        });
    };
    /**
     *  @description 播放入场动画
     */
    MainView.prototype.playStartAni = function () {
        var _this = this;
        // ParticleUtil.instance.creatParticle("snow", this.kGrpSnow);
        // y:557
        ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, snowJson, snow);
        egret.Tween.get(this.kGrpTop, { loop: true }).to({ y: -170 }, 1500, egret.Ease.circInOut).wait(500).to({ y: 0 }, 600, egret.Ease.bounceOut);
        egret.Tween.get(this.kGrpSwipe).wait(5200).call(function () {
            egret.Tween.removeTweens(_this.kGrpTop);
            egret.Tween.removeTweens(_this.kGrpSwipe);
            egret.Tween.get(_this.kImgTips, { loop: true })
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30).wait(1480);
            egret.Tween.get(_this.kGrpSwipe, { loop: true }).to({ y: 500 }, 500).to({ alpha: 0 }, 300).call(function () {
                _this.kGrpSwipe.y = 559;
                _this.kGrpSwipe.alpha = 1;
            });
        });
        // this.setTimeCallBack(9000, this.gameEnd.bind(this));
    };
    /**
     * 初始化游戏数据
    */
    MainView.prototype.initData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    /**
     *  @description 添加游戏事件
    */
    MainView.prototype.addEvents = function () {
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
        this.kGrpTop.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
        this.kGrpTop.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this.kGrpTop.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
        this.kBtnPlay.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
    };
    MainView.prototype.touchBegin = function (evt) {
        this.pointArr[0] = new egret.Point(evt.stageX, evt.stageY);
    };
    MainView.prototype.touchMove = function () {
    };
    MainView.prototype.touchEnd = function (evt) {
        this.pointArr[1] = new egret.Point(evt.stageX, evt.stageY);
        if (this.pointArr[0].y - this.pointArr[1].y > 70)
            this.gameEnd();
    };
    MainView.prototype.gameEnd = function () {
        var _this = this;
        if (this.kGrpTop.y < -200)
            return;
        egret.Tween.removeAllTweens();
        egret.Tween.get(this.kBtnPlay).to({ scaleX: 1, scaleY: 1 }, 100).call(function () {
            egret.Tween.removeTweens(_this.kBtnPlay);
            egret.Tween.get(_this.kBtnPlay, { loop: true })
                .to({ scaleX: 1.1, scaleY: 1.1 }, 500, egret.Ease.quartInOut)
                .to({ scaleX: 0.9, scaleY: 0.9 }, 500, egret.Ease.quartInOut);
        });
        egret.Tween.get(this.kGrpTop).to({ y: -630 }, 1500, egret.Ease.circOut).call(this.openPlateForm.bind(this));
    };
    //产生随机点
    MainView.prototype.createPoint = function () {
        return new egret.Point(200 + Math.floor(Math.random() * 736), 100 + Math.floor(Math.random() * 440));
    };
    //平台跳转应用商店
    MainView.prototype.openPlateForm = function () {
        console.log("平台跳转");
        if (window["dapi"])
            window["dapi"].openStoreUrl();
        if (window["Liftoff"])
            window["Liftoff"].open();
        if (window["mraid"])
            window["mraid"].open();
        if (window["FBPlayableOnCTAClick"])
            window["FBPlayableOnCTAClick"]();
        parent.postMessage('download', '*');
        if (window['ExitApi'])
            window['ExitApi'].exit();
        parent.postMessage('complete', '*');
    };
    //设置延迟回调
    MainView.prototype.setTimeCallBack = function (t, f) {
        var ti = egret.setTimeout(function () {
            egret.clearTimeout(ti);
            f();
        }, this, t);
    };
    //屏幕旋转
    MainView.prototype.onRotation = function (event) {
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
    return MainView;
}(eui.Component));
__reflect(MainView.prototype, "MainView", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=MainView.js.map