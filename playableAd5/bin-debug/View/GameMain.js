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
var GameMain = (function (_super) {
    __extends(GameMain, _super);
    function GameMain() {
        var _this = _super.call(this) || this;
        _this.buildStaus = 0;
        //引导相关变量
        _this.guideArr = [new egret.Point(114, 174), new egret.Point(486, 254), new egret.Point(106, 336),
            new egret.Point(738, 508), new egret.Point(112, 502), new egret.Point(898, 282),
            new egret.Point(110, 640)
        ];
        _this.mcArr = [];
        _this.cachSound = {};
        // this.skinName = GameMainSkin;
        _this.skinName = GameMainDevSkin;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.initUI, _this);
        _this.height = egret.MainContext.instance.stage.stageHeight;
        _this.width = egret.MainContext.instance.stage.stageWidth;
        return _this;
    }
    Object.defineProperty(GameMain, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new GameMain();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 初始化游戏界面UI
    */
    GameMain.prototype.initUI = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.kImgBg.source = main_bg1;
                this.kImgBuild1.source = main_build1;
                this.kImgBuild2.source = main_build2;
                this.kImgBuild3.source = main_build3;
                this.kImgGift.source = main_build4;
                this.kImgDeocrate.source = main_decorate;
                this.kImgPlayfree.source = play;
                this.kImgShape1.source = main_shape1;
                this.kImgShape2.source = main_shape2;
                this.kImgShape3.source = main_shape3;
                this.kImgMenuBg.source = main_alertbg;
                this.kBuild1.setContent(1);
                this.kBuild1.setType(false);
                this.kBuild2.setContent(2);
                this.kBuild2.setType(false);
                this.kBuild3.setContent(3);
                this.kBuild1.setType(false);
                this.playStartAni();
                this.addEvents();
                return [2 /*return*/];
            });
        });
    };
    /**
     *  @description 播放入场动画
     */
    GameMain.prototype.playStartAni = function () {
        // ParticleUtil.instance.creatParticle("snow", this.kGrpSnow);
        // ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, snowJson, snow);
        egret.Tween.get(this.kImgGift, { loop: true }).to({ scaleX: 1.2, scaleY: 1.2 }, 200)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ scaleX: 1, scaleY: 1 }, 200).wait(300);
        this.initData();
        egret.Tween.get(this.kImgPlayfree, { loop: true }).to({ scaleX: 0.8, scaleY: 0.8 }, 200).to({ scaleX: 1, scaleY: 1 }, 600);
    };
    /**
     * 初始化游戏数据
    */
    GameMain.prototype.initData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                GuideStep.instance.init(this.kGrpGuide, this.guideArr);
                GuideStep.instance.moveHand(function () { }, 2);
                this.buildStaus++;
                return [2 /*return*/];
            });
        });
    };
    /**
     *  @description 添加游戏事件
    */
    GameMain.prototype.addEvents = function () {
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
        // this.kImgSwipe.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
        this.kBuild1.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.start, this);
        this.kBuild2.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.start, this);
        this.kBuild3.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.start, this);
        this.kGrpMain.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.move, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.end, this);
        this.kImgGift.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
        this.kImgPlayfree.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
    };
    GameMain.prototype.start = function (evt) {
        console.log("开始拖动");
        SoundManager.instance.playEffect(SoundConst.click);
        if (this.buildStaus == 4)
            return;
        var arr = [main_build1, main_build2, main_build3];
        if (evt.target.parent === this.swichBuild()) {
            this.startPoint = new egret.Point(evt.stageX, evt.stageY);
            this._cachImage = new eui.Image(arr[this.buildStaus - 1]);
            this._cachImage.anchorOffsetX = this["kImgBuild" + this.buildStaus].width / 2;
            this._cachImage.anchorOffsetY = this["kImgBuild" + this.buildStaus].height / 2;
            this._cachImage.x = evt.stageX;
            this._cachImage.y = evt.stageY;
            this._cachImage.alpha = 0.6;
            this["kImgBuild" + this.buildStaus].alpha = 0.3;
            this.kGrpAction.addChild(this._cachImage);
        }
    };
    GameMain.prototype.move = function (evt) {
        console.log("正在拖动");
        if (this.buildStaus == 4)
            return;
        if (!this._cachImage)
            return;
        this._cachImage.x = evt.stageX;
        this._cachImage.y = evt.stageY;
        var image = this["kImgShape" + this.buildStaus];
        // let build:eui.Image = this[`kImgBuild${this.buildStaus}`];
        // let group:eui.Group = this[`kGrpBuild${this.buildStaus}`];
        var flag = image.hitTestPoint(evt.stageX, evt.stageY);
        if (flag) {
            this["kImgBuild" + this.buildStaus].alpha = 0;
            image.visible = true;
        }
        else {
            this["kImgBuild" + this.buildStaus].alpha = 0.3;
            image.visible = false;
        }
    };
    GameMain.prototype.end = function (evt) {
        var _this = this;
        console.log("拖动结束");
        if (this.buildStaus == 4)
            return;
        if (!this._cachImage)
            return;
        var image = this["kImgShape" + this.buildStaus];
        // let build:eui.Image = this[`kImgBuild${this.buildStaus}`];
        // let group:eui.Group = this[`kGrpBuild${this.buildStaus}`];
        var flag = image.hitTestPoint(evt.stageX, evt.stageY);
        if (flag) {
            SoundManager.instance.playEffect(SoundConst.decorae);
            this["kBuild" + this.buildStaus].setType(true);
            this["kImgBuild" + this.buildStaus].alpha = 1;
            image.visible = false;
            GuideStep.instance.clearHand();
            this.buildStaus++;
            this.kGrpAction.removeChild(this._cachImage);
            this.playBuling(evt.stageX, evt.stageY - 200, 500);
            this._cachImage = null;
            if (this.buildStaus == 4)
                GuideStep.instance.moveHand(this.onGift.bind(this));
            else
                GuideStep.instance.moveHand(function () { }, 2);
        }
        else {
            this["kImgBuild" + this.buildStaus].alpha = 0;
            image.visible = false;
            egret.Tween.get(this._cachImage)
                .to({ scaleX: 0.3, scaleY: 0.3, x: this.startPoint.x, t: this.startPoint.y })
                .call(function () {
                _this.kGrpAction.removeChild(_this._cachImage);
                _this._cachImage = null;
            });
        }
    };
    GameMain.prototype.onGift = function () {
        GuideStep.instance.clearHand();
        var colorMatrix = [
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0, 0, 0, 1, 0
        ];
        var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
        this.kImgGift.touchEnabled = false;
        this.kImgGift.cacheAsBitmap = true;
        this.kImgGift.filters = [colorFlilter];
        egret.Tween.removeTweens(this.kImgGift);
        this.kImgDeocrate.y = -100;
        this.kImgDeocrate.alpha = 1;
        egret.Tween.get(this.kImgDeocrate).to({ y: 224 }, 500, egret.Ease.backOut).wait(1000).call(this.onCmplete.bind(this));
        // egret.Tween.get(this.kImgDeocrate).to({ alpha: 1 }, 500).wait(1000).call(this.onCmplete.bind(this));
        this.playBuling(640, 200, 500, 1.5);
    };
    GameMain.prototype.onCmplete = function () {
        var _this = this;
        this.kGrpMain.cacheAsBitmap = true;
        SoundManager.instance.playEffect(SoundConst.pai);
        this.kGrpMenu.visible = false;
        this.kImgPlayfree.visible = false;
        var renderTexture = new egret.RenderTexture();
        var texture = new egret.Texture();
        renderTexture.drawToTexture(this.kGrpMain, new egret.Rectangle(233, 0, 993, 720), 0.81805);
        texture._setBitmapData(renderTexture.$bitmapData);
        GameEnd.instance.Content = texture;
        var rect = new eui.Rect(1280, 720, 0xffffff);
        rect.alpha = 0;
        this.addChild(rect);
        egret.Tween.get(rect).to({ alpha: 1 }, 300).call(function () {
            _this.kGrpMain.filters = [new egret.GlowFilter(0xffffff, 1, 10, 10, 255, 3 /* HIGH */, true, false)];
        }).to({ alpha: 0 }, 300).to({ alpha: 1 }, 200).to({ alpha: 0 }, 200).call(function () {
            _this.kGrpMain.filters = [new egret.BlurFilter(5, 5)];
            _this.stage.addChild(GameEnd.instance);
        });
    };
    GameMain.prototype.clearMc = function () {
        var _this = this;
        this.mcArr.forEach(function (item) {
            _this.kGrpAction.removeChild(item);
        });
        this.mcArr = [];
    };
    GameMain.prototype.swichBuild = function () {
        switch (this.buildStaus) {
            case 1:
                return this.kBuild1;
            case 2:
                return this.kBuild2;
            case 3:
                return this.kBuild3;
        }
    };
    GameMain.prototype.playBuling = function (x, y, t, scale) {
        if (scale === void 0) { scale = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var system;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        SoundManager.instance.playEffect(SoundConst.buling);
                        return [4 /*yield*/, ParticleUtil.instance.getParticleAtH5(this.kGrpAction, starJson, star, x, y + 80, t)];
                    case 1:
                        system = _a.sent();
                        system.scaleX = system.scaleY = scale;
                        system.once(egret.Event.COMPLETE, function () { _this.kGrpAction.removeChild(system); system.stop(); system = null; }, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    //平台跳转应用商店
    GameMain.prototype.openPlateForm = function () {
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
    //设置延迟回调
    GameMain.prototype.setTimeCallBack = function (t, f) {
        var ti = egret.setTimeout(function () {
            egret.clearTimeout(ti);
            f();
        }, this, t);
    };
    //屏幕旋转
    GameMain.prototype.onRotation = function (event) {
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
    return GameMain;
}(eui.Component));
__reflect(GameMain.prototype, "GameMain", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GameMain.js.map