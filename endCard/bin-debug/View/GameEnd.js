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
var GameEnd = (function (_super) {
    __extends(GameEnd, _super);
    function GameEnd() {
        var _this = _super.call(this) || this;
        _this.filter = new egret.GlowFilter(0xf0ff00, 1, 35, 35, 2, 3 /* HIGH */, false, false);
        _this.skinName = "GameEndDevSkin";
        // this.skinName = "GameEndSkin";
        _this.once(egret.Event.ADDED_TO_STAGE, _this.initUI, _this);
        _this.height = egret.MainContext.instance.stage.stageHeight;
        _this.width = egret.MainContext.instance.stage.stageWidth;
        return _this;
    }
    Object.defineProperty(GameEnd, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new GameEnd();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 初始化游戏界面UI
    */
    GameEnd.prototype.initUI = function () {
        // this.playShade();
        // this.kImgBg.source = main_bg1;
        // this.kImgHand.source = main_guide_arrow;
        // this.kImgLogo1.source = main_logo1;
        // this.kImgLogo2.source = main_logo2;
        // this.kImgTips.source = main_tips;
        // this.kImgTopic.source = main_topic;
        this.playStartAni();
        this.addEvents();
    };
    /**
     *  @description 播放入场动画
     */
    GameEnd.prototype.playStartAni = function () {
        var _this = this;
        // 340,932
        egret.Tween.get(this.kImgTopic).to({ y: 68 }, 1000, egret.Ease.backOut).call(function () {
            _this.kImgHand.visible = true;
            egret.Tween.get(_this.kImgHand, { loop: true }).to({ x: 930 }, 1000).call(function () {
                egret.Tween.get(_this.kImgTips, { loop: true })
                    .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
                    .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
                    .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
                    .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30).wait(880);
                egret.Tween.get(_this.kImgLogo2).call(function () {
                    _this.kImgLogo2.filters = [_this.filter];
                }).to({ scaleX: 1, scaleY: 1 }, 300).wait(300).to({ scaleX: 1.2, scaleY: 1.2 }, 100).call(function () {
                    _this.kImgLogo2.filters = [];
                });
            }).wait(500).to({ x: 380 }, 1000).call(function () {
                egret.Tween.get(_this.kImgLogo1).call(function () {
                    _this.kImgLogo1.filters = [_this.filter];
                }).to({ scaleX: 1, scaleY: 1 }, 300).wait(300).to({ scaleX: 1.2, scaleY: 1.2 }, 100).call(function () {
                    _this.kImgLogo1.filters = [];
                });
            }).wait(500);
        });
        egret.Tween.get(this.kImgLogo1).to({ x: 340 }, 1000, egret.Ease.circOut);
        egret.Tween.get(this.kImgLogo2).to({ x: 932 }, 1000, egret.Ease.circOut);
    };
    /**
     * 初始化游戏数据
    */
    GameEnd.prototype.initData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    /**
     *  @description 添加游戏事件
    */
    GameEnd.prototype.addEvents = function () {
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
    };
    //产生随机点
    GameEnd.prototype.createPoint = function () {
        return new egret.Point(200 + Math.floor(Math.random() * 736), 100 + Math.floor(Math.random() * 440));
    };
    //平台跳转应用商店
    GameEnd.prototype.openPlateForm = function () {
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
    GameEnd.prototype.setTimeCallBack = function (t, f) {
        var ti = egret.setTimeout(function () {
            egret.clearTimeout(ti);
            f();
        }, this, t);
    };
    //屏幕旋转
    GameEnd.prototype.onRotation = function (event) {
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
    return GameEnd;
}(eui.Component));
__reflect(GameEnd.prototype, "GameEnd", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GameEnd.js.map