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
var GameEnd = (function (_super) {
    __extends(GameEnd, _super);
    function GameEnd() {
        var _this = _super.call(this) || this;
        _this.boxStatus = false;
        // this.skinName = GameEndSkin;
        _this.skinName = GameEndDevSkin;
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
    GameEnd.prototype.initUI = function () {
        //图片base64赋值
        this.kImgRedesign.source = end_design;
        this.kImgShare.source = end_share;
        this.kImgTopic.source = main_reward_bg;
        this.kImgWelldown.source = end_welldone;
        var tim = new egret.Timer(300, 10000);
        tim.start();
        tim.addEventListener(egret.TimerEvent.TIMER, this.playWu, this);
        this.playStartAni();
        this.addEvents();
    };
    GameEnd.prototype.playStartAni = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // egret.Tween.get(this.kImgLeft, { loop: true }).to({ scaleX: 0.9, scaleY: 0.9 }, 2000).to({ scaleX: 1, scaleY: 1 }, 2000);
                // egret.Tween.get(this.kImgRight, { loop: true }).to({ scaleX: 0.9, scaleY: 0.9 }, 2000).to({ scaleX: 1, scaleY: 1 }, 2000);
                this.kGrpContent.scaleX = 1.5;
                this.kGrpContent.scaleY = 1.2;
                this.kGrpTopic.scaleX = this.kGrpTopic.scaleY = 0;
                this.kImgRedesign.scaleX = this.kImgRedesign.scaleY = 0;
                this.kImgShare.scaleX = this.kImgShare.scaleY = 0;
                egret.Tween.get(this.kGrpContent).to({ scaleX: 0.7, scaleY: 0.7 }, 300, egret.Ease.sineOut).call(function () {
                    egret.Tween.removeTweens(_this.kGrpContent);
                    egret.Tween.get(_this.kGrpTopic).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut).call(function () {
                        egret.Tween.get(_this.kImgRedesign).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.elasticOut).call(_this.playBigA.bind(_this));
                        egret.Tween.get(_this.kImgShare).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.elasticOut);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    GameEnd.prototype.playBigA = function () {
        egret.Tween.get(this.kImgRedesign).to({ scaleX: 1.2, scaleY: 1.2 }, 400).to({ scaleX: 1, scaleY: 1 }, 200).call(this.playBigB.bind(this));
    };
    GameEnd.prototype.playBigB = function () {
        egret.Tween.get(this.kImgShare).to({ scaleX: 1.2, scaleY: 1.2 }, 400).to({ scaleX: 1, scaleY: 1 }, 200).call(this.playBigA.bind(this));
    };
    Object.defineProperty(GameEnd.prototype, "Content", {
        set: function (texture) {
            this.kImgContent.source = texture;
            var mask = new egret.Shape();
            mask.graphics.beginFill(0x000000, 1);
            mask.graphics.drawRoundRect(10, 10, 813, 589, 60, 60);
            mask.graphics.endFill();
            this.kGrpContent.addChild(mask);
            this.kImgContent.mask = mask;
        },
        enumerable: true,
        configurable: true
    });
    GameEnd.prototype.addEvents = function () {
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
        this.kImgRedesign.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
        this.kImgShare.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
    };
    //平台跳转应用商店
    GameEnd.prototype.openPlateForm = function () {
        console.log("平台跳转");
        SoundManager.instance.playEffect(SoundConst.click);
        if (window["dapi"])
            window["dapi"].openStoreUrl();
        if (window["Liftoff"])
            window["Liftoff"].open();
        if (window["mraid"])
            window["mraid"].open();
        if (window["FBPlayableOnCTAClick"])
            window["FBPlayableOnCTAClick"]();
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
    GameEnd.prototype.setTimeCallBack = function (t, f) {
        var ti = egret.setTimeout(function () {
            egret.clearTimeout(ti);
            f();
        }, this, t);
    };
    GameEnd.prototype.playWu = function () {
        var _this = this;
        if (Math.random() > 0.8)
            SoundManager.instance.playEffect(SoundConst.yanhua);
        // let arr = [main_dai1, main_dai2, main_dai3, main_dai4, main_dai5, main_dai6, main_dai7, main_dai8, main_dai9, main_dai10]
        var circle = new eui.Rect(10, 10, Math.floor(Math.random() * 16777215));
        circle.filters = [new egret.GlowFilter(Math.floor(Math.random() * 16777215), 1, 5, 5, 3, 3 /* HIGH */, false, false)];
        circle.ellipseWidth = circle.ellipseHeight = 30;
        circle.x = 640;
        circle.y = 720;
        this.kGrpAction.addChild(circle);
        var endPoint = this.createPoint();
        egret.Tween.get(circle).to({ x: endPoint.x, y: endPoint.y }, 500, egret.Ease.sineOut).call(function () {
            _this.kGrpAction.removeChild(circle);
            _this.playYanhua(endPoint);
            // for (let i = 0; i < 500 * Math.random(); i++) {
            //     // let img:eui.Image = new eui.Image(arr[Math.floor(Math.random()*10)]);
            //     let sc = Math.random() * 20;
            //     let img: eui.Rect = new eui.Rect(sc, sc, Math.floor(Math.random() * 16777215));
            //     // img.ellipseWidth = img.ellipseHeight = sc;
            //     img.anchorOffsetX = img.anchorOffsetY = sc / 2;
            //     img.x = endPoint.x; img.y = endPoint.y;
            //     img.scaleX = img.scaleY = 0;
            //     this.kGrpAction.addChild(img);
            //     img.alpha = 0;
            //     let closePoint = this.createPoint(endPoint.x - 150, endPoint.y - 150, 300, 300);
            //     egret.Tween.get(img).to({ x: closePoint.x, y: closePoint.y, alpha: 1, scaleX: 1, scaleY: 1 }, Math.random() * 1000, egret.Ease.sineOut).wait(200).call(() => {
            //         this.kGrpAction.removeChild(img);
            //         img = null;
            //     });
            // }
        });
    };
    //烟花动画
    GameEnd.prototype.playYanhua = function (p) {
        var _this = this;
        var t = Math.floor(Math.random() * 800);
        var arr = [main_yanhua_1, main_yanhua_2, main_yanhua_3];
        var tim = egret.setTimeout(function () {
            egret.clearTimeout(tim);
            // let p: egret.Point = this.createPoint();
            var img = new eui.Image(arr[Math.floor(Math.random() * 3)]);
            img.anchorOffsetX = 102.5;
            img.anchorOffsetY = 96.5;
            img.scaleX = img.scaleY = 0;
            img.x = p.x;
            img.y = p.y;
            _this.kGrpAction.addChild(img);
            egret.Tween.get(img).to({ scaleX: 2, scaleY: 2 }, 600 + Math.random() * 600, egret.Ease.quadOut).to({ alpha: 0 }, 300).call(function () {
                egret.Tween.removeTweens(img);
                _this.kGrpAction.removeChild(img);
            });
        }, this, t);
    };
    GameEnd.prototype.createPoint = function (x, y, w, h) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (w === void 0) { w = 1280; }
        if (h === void 0) { h = 720; }
        return new egret.Point(x + Math.random() * w, y + Math.random() * h);
    };
    return GameEnd;
}(eui.Component));
__reflect(GameEnd.prototype, "GameEnd", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GameEnd.js.map