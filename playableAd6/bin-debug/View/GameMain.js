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
        _this.peopleNum = 0;
        //引导相关变量
        _this.guideArr = [new egret.Point(382, 442), new egret.Point(574, 578),
            new egret.Point(612, 416), new egret.Point(814, 570),
            new egret.Point(790, 342),
            new egret.Point(1032, 546), new egret.Point(903, 286),
        ];
        _this.mcArr = [];
        _this.cachSound = {};
        // private kImgTapButton: eui.Image = new eui.Image(main_tap);
        _this.kImgTapButton = new eui.Image(main_swipe);
        // this.skinName = GameMainSkin;
        _this.skinName = GameMainDevSkin;
        _this.once(egret.Event.ADDED, _this.initUI, _this);
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
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        //初始化人物动画
                        _a = this;
                        return [4 /*yield*/, Dragon.createArmature(148, 270, 'hippies', this.kGrpPeople2, hippies_ske, hippies_tex, hippies_tex_d)];
                    case 1:
                        //初始化人物动画
                        _a.hippies = (_d.sent());
                        this.hippies.animation.play('walk', 0);
                        _b = this;
                        return [4 /*yield*/, Dragon.createArmature(0, 0, 'officelady', this.kGrpPeople3, officelady_ske, officelady_tex, officelady_tex_d)];
                    case 2:
                        _b.officelady = (_d.sent());
                        this.officelady.animation.play('walk', 0);
                        _c = this;
                        return [4 /*yield*/, Dragon.createArmature(0, 0, 'armatureName', this.kGrpPeople1, geek_ske, geek_tex, geek_tex_d)];
                    case 3:
                        _c.geek = (_d.sent());
                        this.geek.animation.play('walk', 0);
                        this.drumStickArr1 = [this.kDrumstick1, this.kDrumstick2, this.kDrumstick3];
                        this.drumStickArr2 = [this.kDrumstick4, this.kDrumstick5, this.kDrumstick6];
                        this.drumStickArr3 = [this.kImgDrumstick1, this.kImgDrumstick2, this.kImgDrumstick3,
                            this.kImgDrumstick4, this.kImgDrumstick5, this.kImgDrumstick6];
                        // this.drumStickArr4 = [this.kImgOrder1, this.kImgOrder2, this.kImgOrder3, this.kImgOrder4, this.kImgOrder5, this.kImgOrder6];
                        this.kImgBg1.source = main_bg1;
                        this.kImgBg2.source = main_bg2;
                        this.kImgBox.source = loading_c;
                        this.drumStickArr3.forEach(function (item) { item.source = main_food1; });
                        // this.drumStickArr4.forEach(item=>{item.source = main_order});
                        this.kImgOrder1.source = main_order1;
                        this.kImgOrder2.source = main_order2;
                        this.kImgOrder3.source = main_order3;
                        this.kImgMenu1.source = this.kImgMenu2.source = this.kImgMenu3.source = main_menu;
                        this.kImgLux.source = main_lux;
                        this.playStartAni();
                        this.addEvents();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *  @description 播放入场动画
     */
    GameMain.prototype.playStartAni = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // ParticleUtil.instance.creatParticle("snow", this.kGrpSnow);
                // ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, snowJson, snow);
                this.drumStickArr3.forEach((function (item) {
                    _this.playFei(0, item.x - 65, item.y);
                    _this.playSmog(0, item.x + 50, item.y);
                }));
                //234,500,800
                this.producePeople();
                return [2 /*return*/];
            });
        });
    };
    GameMain.prototype.producePeople = function () {
        var _this = this;
        var arr = [800, 500, 234];
        egret.Tween.get(this["kGrpPeople" + (3 - this.peopleNum)]).to({ x: arr[this.peopleNum] }, 600).call(function () {
            if (_this.peopleNum == 0)
                _this.hippies.animation.play('stand', 0);
            if (_this.peopleNum == 1)
                _this.officelady.animation.play('stand', 0);
            if (_this.peopleNum == 2)
                _this.geek.animation.play('stand', 0);
            egret.Tween.get(_this["kGrpMenu" + (3 - _this.peopleNum)]).to({ scaleX: 1, scaleY: 1 }, 400, egret.Ease.elasticOut);
            _this.peopleNum++;
            if (_this.peopleNum != 3)
                _this.producePeople();
            else
                _this.setTimeCallBack(1000, _this.initData.bind(_this));
        });
    };
    /**
     * 初始化游戏数据
    */
    GameMain.prototype.initData = function () {
        GuideStep.instance.init(this.kGrpGuide, this.guideArr);
        GuideStep.instance.moveHand(this.clickSoil.bind(this));
    };
    GameMain.prototype.clickSoil = function () {
        var _this = this;
        this.hippies.animation.play('upset', 0);
        this.officelady.animation.play('upset', 0);
        // this.geek.animation.play('upset', 0);
        this.clearMc();
        GuideStep.instance.clearHand();
        var arr = (_a = this.drumStickArr1).concat.apply(_a, this.drumStickArr2);
        arr.forEach(function (item) { item.x = item.x + 30; item.y = item.y - 50; });
        this.drumStickArr3.forEach(function (item) {
            egret.Tween.get(item).to({ scaleX: 0, scaleY: 0 }, 300);
        });
        var a = 0;
        var scaleArr = [1, 0.9, 0.8];
        var tim = new egret.Timer(200, 6);
        tim.start();
        tim.addEventListener(egret.TimerEvent.TIMER, function () {
            egret.Tween.get(arr[a]).to({ scaleX: scaleArr[a >= 3 ? a - 3 : a], scaleY: scaleArr[a >= 3 ? a - 3 : a] }, 400, egret.Ease.elasticOut);
            a++;
        }, this);
        tim.once(egret.TimerEvent.TIMER_COMPLETE, function () {
            tim.stop();
            tim = null;
            GuideStep.instance.moveHand(_this.showFries.bind(_this));
        }, this);
        var _a;
    };
    GameMain.prototype.showFries = function () {
        var _this = this;
        var arr = this.drumStickArr1.concat(this.drumStickArr2);
        var a = 0;
        var tim = new egret.Timer(150, 6);
        tim.start();
        tim.addEventListener(egret.TimerEvent.TIMER, function () {
            arr[a].showImg2();
            a++;
        }, this);
        GuideStep.instance.clearHand();
        tim.once(egret.TimerEvent.TIMER_COMPLETE, function () {
            tim.stop();
            tim = null;
            GuideStep.instance.moveHand(_this.showTomoto.bind(_this));
        }, this);
    };
    GameMain.prototype.showTomoto = function (flag) {
        var _this = this;
        if (flag === void 0) { flag = false; }
        var arr = this.drumStickArr1.concat(this.drumStickArr2);
        var a = 0;
        var tim = new egret.Timer(150, 6);
        tim.start();
        tim.addEventListener(egret.TimerEvent.TIMER, function () {
            arr[a].showImg3();
            a++;
        }, this);
        GuideStep.instance.clearHand();
        tim.once(egret.TimerEvent.TIMER_COMPLETE, function () {
            tim.stop();
            tim = null;
            GuideStep.instance.moveHand(_this.conactDrumstick.bind(_this, true));
        }, this);
    };
    GameMain.prototype.conactDrumstick = function (flag) {
        if (flag === void 0) { flag = false; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var arr, a, tim;
            return __generator(this, function (_a) {
                this.geek.animation.play('happy', 0);
                GuideStep.instance.clearHand();
                arr = this.drumStickArr1.concat(this.drumStickArr2);
                a = 0;
                tim = new egret.Timer(400, 3);
                tim.start();
                tim.addEventListener(egret.TimerEvent.TIMER, function () { return __awaiter(_this, void 0, void 0, function () {
                    var system;
                    return __generator(this, function (_a) {
                        if (a == 1)
                            this.hippies.animation.play('happy', 0);
                        if (a == 3)
                            this.officelady.animation.play('happy', 0);
                        if (a < 2)
                            this["kImgOrder" + (a + 1)].source = main_right;
                        system = ParticleUtil.instance.getParticleAtH5(this.kGrpAction, coinJson, coin, arr[a].x, arr[a].y, 700);
                        egret.Tween.get(arr[a]).to({ scaleX: 0, scaleY: 0 }, 700);
                        a++;
                        return [2 /*return*/];
                    });
                }); }, this);
                GuideStep.instance.clearHand();
                tim.once(egret.TimerEvent.TIMER_COMPLETE, function () {
                    tim.stop();
                    tim = null;
                    // this.onCmplete();
                    // GuideStep.instance.moveHand(this.openPlateForm.bind(this));
                    GuideStep.instance.moveHand(_this.openPlateForm.bind(_this), 2);
                    _this.setTimeCallBack(2400, _this.showButton.bind(_this));
                }, this);
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
    };
    GameMain.prototype.onCmplete = function () {
        var rect = new eui.Rect(1280, 720, 0x481b28);
        rect.fillAlpha = 0.26;
        this.kGrpAction.addChild(rect);
        this.showButton();
        egret.Tween.get(this.kGrpEnd).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut);
        egret.Tween.get(this.kImgLux, { loop: true }).to({ rotation: 360, alpha: 0.3 }, 2000).to({ rotation: 720, alpha: 1 }, 2000);
        egret.Tween.get(this.kImgBox, { loop: true }).call(function () { SoundManager.instance.playEffect(SoundConst.huang); }).
            to({ scaleX: 1.2, scaleY: 1.2 }, 200)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ scaleX: 1, scaleY: 1 }, 200).wait(300);
    };
    GameMain.prototype.setProgress = function (t, f, x, y) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var mm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, McManger.instance.getMcAtH5('mc', mcJson, mc)];
                    case 1:
                        mm = _a.sent();
                        this.kGrpAction.addChild(mm);
                        mm.x = x;
                        mm.y = y;
                        mm.frameRate = 8000 / t;
                        mm.gotoAndPlay(0);
                        mm.once(egret.Event.COMPLETE, function () {
                            _this.kGrpAction.removeChild(mm);
                            f();
                        }, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    GameMain.prototype.playFei = function (t, x, y) {
        return __awaiter(this, void 0, void 0, function () {
            var mm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, McManger.instance.getMcAtH5('mc', mcJson, mc, "soil")];
                    case 1:
                        mm = _a.sent();
                        this.kGrpAction.addChild(mm);
                        mm.x = x;
                        mm.y = y;
                        mm.gotoAndPlay(0, -1);
                        this.mcArr.push(mm);
                        return [2 /*return*/];
                }
            });
        });
    };
    GameMain.prototype.playSmog = function (t, x, y) {
        return __awaiter(this, void 0, void 0, function () {
            var system;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ParticleUtil.instance.getParticleAtH5(this.kGrpAction, smJson, sm, x, y)];
                    case 1:
                        system = _a.sent();
                        system.alpha = 0.1;
                        this.mcArr.push(system);
                        return [2 /*return*/];
                }
            });
        });
    };
    GameMain.prototype.clearMc = function () {
        var _this = this;
        this.mcArr.forEach(function (item) {
            _this.kGrpAction.removeChild(item);
            item = null;
        });
        this.mcArr = [];
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
    GameMain.prototype.showButton = function () {
        var _this = this;
        this.kGrpGuide.addChild(this.kImgTapButton);
        this.kGrpGuide.setChildIndex(this.kImgTapButton, 0);
        this.kImgTapButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
        this.kImgTapButton.horizontalCenter = 0;
        // this.kImgTapButton.verticalCenter = 240;
        this.kImgTapButton.verticalCenter = 0;
        this.kImgTapButton.scaleX = this.kImgTapButton.scaleY = 0;
        egret.Tween.get(this.kImgTapButton).to({ scaleX: 1, scaleY: 1 }, 700, egret.Ease.elasticOut).call(function () {
            egret.Tween.removeTweens(_this.kImgTapButton);
            egret.Tween.get(_this.kImgTapButton, { loop: true }).to({ scaleX: 1.3, scaleY: 1.3 }, 600).to({ scaleX: 1.1, scaleY: 1.1 }, 100);
        });
    };
    return GameMain;
}(eui.Component));
__reflect(GameMain.prototype, "GameMain", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GameMain.js.map