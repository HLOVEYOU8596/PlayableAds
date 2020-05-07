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
        // this.skinName = GameEndSkin;
        _this.skinName = GameEndDevSkin;
        _this.once(egret.Event.ADDED, _this.initUI, _this);
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
    GameEnd.prototype.initUI = function () {
        //初始化图片UI
        this.kImgStar1.source = end_starw;
        this.kImgStar2.source = end_starw;
        this.kImgStar3.source = end_starw;
        this.kImgBg.source = end_bg;
        this.kImgRetry.source = end_retry;
        this.kImgAlertBg.source = end_alert;
        this.playStartAni();
        this.addEvents();
    };
    GameEnd.prototype.playStartAni = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var action, t, sound;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.playYanhua();
                        this.playYanhua();
                        this.playYanhua();
                        this.playYanhua();
                        this.playYanhua();
                        this.kGrpAlert.scaleX = this.kGrpAlert.scaleY = 0;
                        egret.Tween.get(this.kGrpAlert).to({ scaleX: 1, scaleY: 1 }, 700, egret.Ease.elasticOut).call(function () {
                            var img = new eui.Image(end_star);
                            img.x = 640;
                            img.y = 320;
                            img.anchorOffsetX = img.anchorOffsetY = 47;
                            img.scaleX = img.scaleY = 5;
                            _this.kGrpMain.addChild(img);
                            var point = _this.kImgStar1.localToGlobal();
                            egret.Tween.get(img).to({ rotation: 720, scaleX: 1, scaleY: 1, x: point.x + 50, y: point.y + 30 }, 1000, egret.Ease.circIn).call(function () {
                                _this.kGrpMain.removeChild(img);
                                _this.kImgStar1.rotation = 0;
                                _this.kImgStar1.source = end_star;
                                SoundManager.instance.playEffect(SoundConst.down);
                            });
                            var img1 = new eui.Image(end_star);
                            img1.x = 640;
                            img1.y = 320;
                            img1.anchorOffsetX = img1.anchorOffsetY = 47;
                            img1.scaleX = img1.scaleY = 5;
                            _this.kGrpMain.addChild(img1);
                            var point1 = _this.kImgStar2.localToGlobal();
                            egret.Tween.get(img1).wait(600).to({ rotation: 720, scaleX: 1, scaleY: 1, x: point1.x + 50, y: point1.y + 30 }, 1500, egret.Ease.circIn).call(function () {
                                _this.kGrpMain.removeChild(img1);
                                _this.kImgStar2.rotation = 0;
                                _this.kImgStar2.source = end_star;
                                _this.kImgStar2.rotation = 12;
                                SoundManager.instance.playEffect(SoundConst.down);
                            });
                        });
                        return [4 /*yield*/, McManger.instance.getMcAtH5('mc', mcJson, mc, 'girl')];
                    case 1:
                        action = _a.sent();
                        t = new egret.Timer(300, 0);
                        t.start();
                        t.addEventListener(egret.TimerEvent.TIMER, function () {
                            _this.playYanhua();
                        }, this);
                        this.kGrpMain.addChild(action);
                        action.gotoAndPlay(0, -1);
                        action.scaleX = -2;
                        action.scaleY = 2;
                        action.x = 450;
                        action.y = 170;
                        sound = new egret.Sound();
                        sound.load(SoundConst.laugh);
                        sound.addEventListener(egret.Event.COMPLETE, function () {
                            sound.play(0, -1);
                        }, this);
                        egret.Tween.get(this.kImgRetry, { loop: true }).to({ scaleX: 1.2, scaleY: 1.2 }, 600).to({ scaleX: 1, scaleY: 1 }, 300);
                        return [2 /*return*/];
                }
            });
        });
    };
    GameEnd.prototype.addEvents = function () {
        this.kImgRetry.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
    };
    //烟花动画
    GameEnd.prototype.playYanhua = function () {
        var _this = this;
        var t = Math.floor(Math.random() * 800);
        var arr = [main_yanhua_1, main_yanhua_2, main_yanhua_3];
        var tim = egret.setTimeout(function () {
            egret.clearTimeout(tim);
            var p = _this.createPoint();
            var img = new eui.Image(arr[Math.floor(Math.random() * 3)]);
            img.anchorOffsetX = 102.5;
            img.anchorOffsetY = 96.5;
            img.scaleX = img.scaleY = 0;
            img.x = p.x;
            img.y = p.y;
            _this.kGrpAction.addChild(img);
            egret.Tween.get(img).to({ scaleX: 2, scaleY: 2 }, 1200, egret.Ease.quadOut).to({ alpha: 0 }, 300).call(function () {
                egret.Tween.removeTweens(img);
                _this.kGrpAction.removeChild(img);
            });
        }, this, t);
    };
    //产生随机点
    GameEnd.prototype.createPoint = function () {
        return new egret.Point(200 + Math.floor(Math.random() * 500), 100 + Math.floor(Math.random() * 440));
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
    };
    return GameEnd;
}(eui.Component));
__reflect(GameEnd.prototype, "GameEnd", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GameEnd.js.map