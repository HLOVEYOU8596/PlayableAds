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
        _this.boxStatus = false;
        // this.skinName = GameStartSkin;
        _this.skinName = GameStartDevSkin;
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
        // this.kImgBg.source = start_bg;
        // this.kImgBox.source = start_box_close;
        // this.kImgHand.source = main_guide_arrow;
        // this.kImgLux.source = start_lux;
        // this.kBtnTap.source = start_tap;
        this.playStartAni();
        this.addEvents();
        // this.kGrpMain.tint = 0xffff00;
    };
    GameStart.prototype.playStartAni = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                egret.Tween.get(this.kImgBox, { loop: true }).call(function () { SoundManager.instance.playEffect(SoundConst.huang); }).
                    to({ scaleX: 1.2, scaleY: 1.2 }, 200)
                    .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
                    .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
                    .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
                    .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
                    .to({ scaleX: 1, scaleY: 1 }, 200).wait(300);
                egret.Tween.get(this.kImgHand).wait(3000).call(function () {
                    egret.Tween.removeTweens(_this.kImgHand);
                    _this.kImgHand.visible = true;
                    _this.kImgHand.scaleX = _this.kImgHand.scaleY = 0.8;
                    egret.Tween.get(_this.kImgHand, { loop: true }).
                        to({ scaleX: 1.1, scaleY: 1.1 }, 500, egret.Ease.quartInOut)
                        .to({ scaleX: 0.8, scaleY: 0.8 }, 500, egret.Ease.quartInOut);
                });
                this.setTimeCallBack(6000, function () {
                    _this.openBox();
                });
                return [2 /*return*/];
            });
        });
    };
    GameStart.prototype.addEvents = function () {
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
        this.kImgBox.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openBox, this);
    };
    GameStart.prototype.openBox = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var system, num;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.boxStatus)
                            return [2 /*return*/];
                        this.boxStatus = true;
                        this.kImgBox.rotation = 0;
                        egret.Tween.removeTweens(this.kImgHand);
                        egret.Tween.removeTweens(this.kImgBox);
                        this.kImgHand.visible = false;
                        this.kBtnTap.visible = false;
                        // this.kImgBox.source = start_box_open;
                        this.kImgLux.visible = true;
                        egret.Tween.get(this.kImgLux, { loop: true }).to({ rotation: 360 }, 4000);
                        return [4 /*yield*/, ParticleUtil.instance.getParticleAtH5(this.kGrpAction, coinJson, coin, 674, 270, 3000)];
                    case 1:
                        system = _a.sent();
                        SoundManager.instance.playEffect(SoundConst.open);
                        SoundManager.instance.playEffect(SoundConst.coin);
                        system.scaleX = system.scaleY = 0.8;
                        num = 1;
                        system.addEventListener(egret.Event.COMPLETE, function () {
                            system.stop();
                            _this.kGrpAction.removeChild(system);
                        }, this);
                        this.setTimeCallBack(2800, function () {
                            RES.getResByUrl(font, function (texture) {
                                _this.kImgBox.visible = false;
                                var label = new egret.BitmapText();
                                var font = new egret.BitmapFont(texture, fontConfig);
                                label.font = font;
                                label.width = 1280;
                                label.height = 720;
                                label.anchorOffsetX = 640;
                                label.anchorOffsetY = 360;
                                label.textAlign = egret.HorizontalAlign.CENTER;
                                label.y = 500;
                                label.x = 700;
                                _this.kGrpAction.addChild(label);
                                label.scaleX = label.scaleY = 1;
                                var a = 1;
                                var tim = new egret.Timer(100, 20);
                                tim.start();
                                tim.addEventListener(egret.TimerEvent.TIMER, function () {
                                    SoundManager.instance.playEffect(SoundConst.up);
                                    SoundManager.instance._volEffect = 0.2;
                                    a += Math.floor(Math.random() * 1000);
                                    label.text = "c" + a;
                                }, _this);
                                tim.once(egret.TimerEvent.TIMER_COMPLETE, function () {
                                    console.log("计时器关闭");
                                    SoundManager.instance._volEffect = 1;
                                    SoundManager.instance.playEffect(SoundConst.swich);
                                    egret.Tween.get(_this.kImgMask).to({ fillAlpha: 1 }, 400).wait(300).call(function () {
                                        _this.stage.addChild(GameMain.instance);
                                    });
                                }, _this);
                            }, _this, RES.ResourceItem.TYPE_IMAGE);
                        });
                        return [2 /*return*/];
                }
            });
        });
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
var fontConfig = { "file": "font.png", "frames": {
        "+": { "x": 340, "y": 480, "w": 121, "h": 181, "offX": 0, "offY": 0, "sourceW": 121, "sourceH": 181 },
        "1": { "x": 340, "y": 663, "w": 87, "h": 239, "offX": 0, "offY": 0, "sourceW": 87, "sourceH": 239 },
        "2": { "x": 392, "y": 239, "w": 111, "h": 239, "offX": 0, "offY": 0, "sourceW": 111, "sourceH": 239 },
        "3": { "x": 279, "y": 239, "w": 111, "h": 239, "offX": 0, "offY": 0, "sourceW": 111, "sourceH": 239 },
        "4": { "x": 227, "y": 480, "w": 111, "h": 234, "offX": 0, "offY": 0, "sourceW": 111, "sourceH": 234 },
        "5": { "x": 124, "y": 240, "w": 111, "h": 238, "offX": 0, "offY": 0, "sourceW": 111, "sourceH": 238 },
        "6": { "x": 114, "y": 480, "w": 111, "h": 235, "offX": 0, "offY": 0, "sourceW": 111, "sourceH": 235 },
        "7": { "x": 1, "y": 452, "w": 111, "h": 236, "offX": 0, "offY": 0, "sourceW": 111, "sourceH": 236 },
        "8": { "x": 1, "y": 214, "w": 121, "h": 236, "offX": 0, "offY": 0, "sourceW": 121, "sourceH": 236 },
        "9": { "x": 156, "y": 1, "w": 121, "h": 237, "offX": 0, "offY": 0, "sourceW": 121, "sourceH": 237 },
        "c": { "x": 1, "y": 1, "w": 153, "h": 211, "offX": 0, "offY": 0, "sourceW": 153, "sourceH": 211 },
        "0": { "x": 279, "y": 1, "w": 121, "h": 236, "offX": 0, "offY": 0, "sourceW": 121, "sourceH": 236 }
    } };
//# sourceMappingURL=GameStart.js.map