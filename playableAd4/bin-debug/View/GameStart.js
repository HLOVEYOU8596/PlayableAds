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
var GameStart = (function (_super) {
    __extends(GameStart, _super);
    function GameStart() {
        var _this = _super.call(this) || this;
        _this.systemArr = [];
        _this.mcArr = [];
        // this.skinName = GameStartSkin;
        _this.skinName = GameStartDevSkin;
        // this.loadVideo();
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
        //图片base64赋值
        this.kImgBg.source = start_poster;
        this.kImgDo.source = main_do;
        this.kImgUpgrade.source = main_upgrade;
        this.playStartAni();
        // this.setTimeCallBack(3000,this.playStartAni.bind(this));
        this.addEvents();
    };
    GameStart.prototype.playStartAni = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var system1, system2, system3, s1, s2, s3, s4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ParticleUtil.instance.getParticleAtH5(this.kGrpVideo, smJson1, sm1, 330, 300)];
                    case 1:
                        system1 = _a.sent();
                        system1.scaleX = system1.scaleY = 0.7;
                        system1.alpha = 0.5;
                        return [4 /*yield*/, ParticleUtil.instance.getParticleAtH5(this.kGrpVideo, smJson1, sm1, 240, 420)];
                    case 2:
                        system2 = _a.sent();
                        system2.scaleX = system2.scaleY = 0.7;
                        system2.alpha = 0.5;
                        return [4 /*yield*/, ParticleUtil.instance.getParticleAtH5(this.kGrpVideo, smJson1, sm1, 380, 420)];
                    case 3:
                        system3 = _a.sent();
                        system3.scaleX = system3.scaleY = 0.7;
                        system3.alpha = 0.5;
                        return [4 /*yield*/, McManger.instance.getMcAtH5('fire', fireJson, fire)];
                    case 4:
                        s1 = _a.sent();
                        return [4 /*yield*/, McManger.instance.getMcAtH5('fire', fireJson, fire)];
                    case 5:
                        s2 = _a.sent();
                        return [4 /*yield*/, McManger.instance.getMcAtH5('fire', fireJson, fire)];
                    case 6:
                        s3 = _a.sent();
                        return [4 /*yield*/, McManger.instance.getMcAtH5('fire', fireJson, fire)];
                    case 7:
                        s4 = _a.sent();
                        s1.gotoAndPlay(0, -1);
                        s2.gotoAndPlay(0, -1);
                        s3.gotoAndPlay(0, -1);
                        s4.gotoAndPlay(0, -1);
                        s1.scaleX = s1.scaleY = s2.scaleX = s2.scaleY = s3.scaleX = s3.scaleY = s4.scaleX = s4.scaleY = 0.8;
                        this.systemArr.push(system1, system2, system3);
                        this.mcArr.push(s1, s2, s3, s4);
                        s1.frameRate = s2.frameRate = s3.frameRate = s4.frameRate = 8;
                        s1.x = 270;
                        s2.x = 470;
                        s3.x = 660;
                        s4.x = 850;
                        s1.y = s2.y = s3.y = s4.y = 30;
                        this.kGrpVideo.addChild(s1);
                        this.kGrpVideo.addChild(s2);
                        this.kGrpVideo.addChild(s3);
                        this.kGrpVideo.addChild(s4);
                        this.kImgBg.cacheAsBitmap = true;
                        // let filters = [new egret.GlowFilter(0xff0000,1,100,100,3,egret.BitmapFilterQuality.HIGH,true)];
                        // let t = new egret.Timer(200,15);
                        // t.start();
                        // t.addEventListener(egret.TimerEvent.TIMER,()=>{
                        //     this.kImgBg.filters = this.kImgBg.filters?undefined:filters;
                        // },this);
                        this.setTimeCallBack(3000, function () {
                            _this.kGrpShow.visible = true;
                            _this.kImgMask.visible = true;
                            _this.kGrpShow.scaleX = _this.kGrpShow.scaleY = 0;
                            egret.Tween.get(_this.kGrpShow).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut).call(function () {
                                egret.Tween.get(_this.kImgDo, { loop: true }).to({ scaleX: 1.1, scaleY: 1.1 }, 300).to({ scaleX: 1, scaleY: 1 }, 150);
                                egret.Tween.get(_this.kImgUpgrade, { loop: true }).to({ scaleX: 1.1, scaleY: 1.1 }, 300).to({ scaleX: 1, scaleY: 1 }, 150);
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    GameStart.prototype.addEvents = function () {
        // this._video.once(egret.Event.COMPLETE, ()=>{this._video.play();SoundManager.instance.playBg(SoundConst.bgm2);}, this);
        // this._video.once(egret.Event.ENDED,()=>{this.playStartAni()},this);
        this.kImgDo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openGameMain, this);
        this.kImgUpgrade.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openGameMain, this);
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
    };
    GameStart.prototype.loadVideo = function () {
        this._video = new egret.Video();
        ;
        this._video.fullscreen = false;
        this._video.width = 1280;
        this._video.height = 720;
        // this._video.load(start);
        this._video.volume = 0;
        this._video.poster = start_poster;
        this.kGrpVideo.addChild(this._video);
    };
    GameStart.prototype.openGameMain = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.clean();
                SoundManager.instance.playBg(SoundConst.bgm2);
                SoundManager.instance.playEffect(SoundConst.click);
                this.kImgMask.visible = false;
                this.kGrpShow.visible = false;
                this.setTimeCallBack(3000, function () {
                    _this.systemArr.forEach(function (item) {
                        item.stop();
                        _this.kGrpVideo.removeChild(item);
                        item = null;
                    });
                    _this.mcArr.forEach(function (item) {
                        item.stop();
                        _this.kGrpVideo.removeChild(item);
                        item = null;
                    });
                    _this.stage.removeChild(_this);
                });
                // this.kGrpShow.visible = false;
                // GameMain.instance.x = 1280;
                this.stage.addChild(GameMain.instance);
                return [2 /*return*/];
            });
        });
    };
    GameStart.prototype.clean = function () {
        this.kImgDo.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.openGameMain, this);
        this.kImgUpgrade.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.openGameMain, this);
        egret.MainContext.instance.stage.removeEventListener(egret.Event.RESIZE, this.onRotation, this);
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
    GameStart.prototype.setTimeCallBack = function (t, f) {
        var ti = egret.setTimeout(function () {
            egret.clearTimeout(ti);
            f();
        }, this, t);
    };
    return GameStart;
}(eui.Component));
__reflect(GameStart.prototype, "GameStart", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GameStart.js.map